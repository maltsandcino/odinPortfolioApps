import dragPane from './dragPane.js'
import folderIcon from './assets/foldericon.png'
import todoapp from './toDoApp.js'

///Functionality to add: resize pane, fix id tags
const applicationTable = {}
applicationTable["todoapp"] =  todoapp



function makeWindow(id){
    
    //Default Window Content
    let windowContent = document.createElement("div");
    windowContent.classList.add("windowBottom");
    windowContent.innerHTML = `No content has been found for ${id}`
    
    //Checking to see if the window exists anywhere in the DOM
    if(document.getElementById(`windowPane${id}`)){
        document.getElementById(`windowPane${id}`).style.left = "25%";
        document.getElementById(`windowPane${id}`).style.top = "25%";
        //Below we remove the icon from the doc if it's in there, i.e. the window is minimized.
        document.getElementById(`windowPane${id}`).style.display = 'grid'
        if (document.getElementById(`dock+${id}`)){
            document.getElementById(`dock+${id}`).parentNode.removeChild(document.getElementById(`dock+${id}`))
        }
        return 0
    }
    //Generating the content of the window if the app exists in the Hashtable
    if(applicationTable.hasOwnProperty(id)){
        windowContent = applicationTable[id]
    }
    //Creating the Window
    let pane = document.createElement("div")
    let contentPane = document.getElementById("contentHolder");
    pane.classList.add("windowPane")
    pane.id=`windowPane${id}`
    pane.draggable="false"
    pane.innerHTML = `  <div class="windowTop" id="windowTop${id}" data-id="${id}">
                            <div class="buttonRed pB paneButton${id}"></div>
                            <div class="buttonYellow pB paneButton${id}"></div>
                            <div class="buttonGreen pB paneButton${id}"></div>
                            == ${id} ==
                        </div>
                 `
    //Appending the window content and the window
    pane.appendChild(windowContent)
    contentPane.appendChild(pane);

    //Handling window movement and Buttons Actions
    document.getElementById(`windowTop${id}`).addEventListener('mousedown', dragPane);
    let buttons = document.querySelectorAll(`.paneButton${id}`);

    buttons.forEach(button => {
        if (button.classList.contains("buttonRed")){
            button.addEventListener('click', () => {
                contentPane.removeChild(pane);
        })};

        if(button.classList.contains("buttonYellow")){
            button.addEventListener('click', () => {
                let dock = document.getElementById("dock")
                //We need logic to import the actual image here, but for now, we'll use the generic folder.
                let icon = document.createElement('img')
                icon.src=folderIcon
                icon.title=id
                icon.id=`dock+${id}`
                icon.classList.add("dockIcon")
                icon.addEventListener('click', () => {
                    pane.style.display = "grid";
                    dock.removeChild(icon);
                })
                dock.appendChild(icon)
                pane.style.display = "none"
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