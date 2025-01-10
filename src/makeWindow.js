import dragPane from './dragPane.js'
///Functionality to add: resize pane, fix id tags
function makeWindow(id){
    console.log(id)
    if(document.getElementById("windowPane")){
        document.getElementById("windowPane").style.left = "25%";
        document.getElementById("windowPane").style.top = "25%";
        return 0
    }

    let pane = document.createElement("div")
    let contentPane = document.getElementById("contentHolder");
    pane.classList.add("windowPane")
    pane.id="windowPane"
    pane.draggable="false"
    pane.innerHTML = `  <div class="windowTop" id="windowTop">
                            <div class="buttonRed paneButton"></div>
                            <div class="buttonYellow paneButton"></div>
                            <div class="buttonGreen paneButton"></div>
                            == ${id} ==
                        </div>
                        <div class="windowBottom">
                            Window content for the ${id} app.
                        </div>`
        
    contentPane.appendChild(pane);

    document.getElementById("windowTop").addEventListener('mousedown', dragPane);
    let buttons = document.querySelectorAll(".paneButton");

    buttons.forEach(button => {
        if (button.classList.contains("buttonRed")){
            button.addEventListener('click', () => {
                contentPane.removeChild(pane);
        })};

        if(button.classList.contains("buttonYellow")){
            button.addEventListener('click', () => {
                console.log("This doesn't do anything yet.")
            })
        }
        else {
            button.addEventListener('click', () => {
                if (!pane.classList.contains('windowPaneMaximized')){
                    pane.dataset.left = pane.style.left;
                    pane.dataset.top = pane.style.top;
                    pane.style.left = "0px";
                    pane.style.top = "0px"
                    pane.classList.add("windowPaneMaximized")
                }
                else {
                    pane.style.left = pane.dataset.left;
                    pane.style.top = pane.dataset.top;
                    pane.classList.remove("windowPaneMaximized")
                    }
            }
            
            )

        }
    })
    
}

export default makeWindow