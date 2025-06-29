import DOMPurify from 'dompurify'

let browser = document.createElement("div");
browser.classList.add("browserContainer");

let browserBar = document.createElement("div");
browserBar.classList.add("browserBar");

let browserField = document.createElement("input");
browserField.type = "text"
browserField.classList.add("browserSearch");
browserField.addEventListener("keydown", search);

let browserButtonsHolder = document.createElement("div");
browserButtonsHolder.innerText = "GO BACK FORWARD STOP"
browserButtonsHolder.classList.add("browserButtonsHolder");

browserBar.appendChild(browserField);
browserBar.appendChild(browserButtonsHolder);

let browserContent = document.createElement("iframe");
browserContent.classList.add("browserContent");
browserContent.id = "browserContent"
browserContent.src = "http://localhost:9000/";

browser.appendChild(browserBar);
browser.appendChild(browserContent);

async function search() {
    if (event.key === "Enter") {
        try {
            if (browserField.value.slice(0,7) != "http://"){
                browserField.value = "https://" + browserField.value
            }
            const proxyUrl = `/api/proxy?url=${encodeURIComponent(browserField.value)}`;
            const response = await fetch(proxyUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let data = await response.text(); // Use .text() for general HTML content
            console.log(data);
            // data = DOMPurify.sanitize(data);
            console.log(data);

            // Parse the HTML to extract <link> tags
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const links = doc.querySelectorAll('link[rel="stylesheet"]');

            // Load CSS files in the iframe
            const iframeDoc = browserContent.contentDocument;
            iframeDoc.open();
            iframeDoc.write(data);

            links.forEach(link => {
                const cssUrl = link.href;
                const proxyCssUrl = `/css-proxy?url=${encodeURIComponent(cssUrl)}`;
                const styleLink = iframeDoc.createElement('link');
                styleLink.rel = 'stylesheet';
                styleLink.href = proxyCssUrl;
                iframeDoc.head.appendChild(styleLink);
            });

            iframeDoc.close();
        } catch (error) {
            console.error('Error fetching content:', error);
            document.getElementById('browserContent').innerHTML = 'Failed to load content.';
        }
    }
}



export default browser;