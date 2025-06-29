import filesHolder from "./assets/documents/filesHolder.js"
import pdf from "./assets/pdf.svg"
import doc from "./assets/document.svg"

const files = document.createElement("div")
files.style.display = "flex"
files.style.flexDirection = "column"

populateFiles(filesHolder)

function populateFiles(filesHolder){
    files.innerHTML = ""
    const header = document.createElement("div")
    header.classList.add("filesHeader")
    header.innerHTML = `<span class="fileType">Type</span><span class="filesLineName">Filename</span><span class="filesLineOpen"></span>`

    files.appendChild(header)

    Object.entries(filesHolder).forEach(([k, v]) => {
        const line = document.createElement("div");
        line.classList.add("filesLine")
            if (v[0] === 'html'){
                line.innerHTML = `
                <img src=${doc} class="filesIcon" title="html"> <span class="filesLineName">${k}</span><span class="filesLineOpen">Open</span>`
                }
                else {
                line.innerHTML = `
                <img src=${pdf} class="filesIcon" title="pdf"> <span class="filesLineName">${k}</span><span class="filesLineOpen">Open</span>`
                }
                line.addEventListener("dblclick", () => openFile(k, v))
            files.appendChild(line)
            })
}

function openFile(name, contents){
    if (contents[0] === "html"){
        files.innerHTML = '<span class="closeFiles"> Click Here to Close File </span>' + contents[1]
        files.style.overflowY = 'scroll';
    }
    else {
        files.innerHTML = '<span class="closeFiles"> Click Here to Close File </span>'
        const viewer = document.createElement("object")
        viewer.data = contents[1]
        viewer.type = "application/pdf"
        viewer.innerHTML = `<p>Your browser does not support PDFs. <a href=${contents[1]}>Download the PDF</a>.</p>`
        files.style.overflowY = 'scroll';
        files.appendChild(viewer)
    }
    document.querySelector(".closeFiles").addEventListener("click", () => populateFiles(filesHolder))
}


export default files;