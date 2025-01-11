import { format, add } from 'date-fns';
import Task from './task.js';
import Project from './project.js';
import ProjectManager from './projectManager.js'
import objectToClass from './jsonToObject.js'
import enableDrag from './drag.js'
// import makeWindow from './makeWindow.js'
import './styles.css'

//Create project manager. This checks for existing program managers. IT also parses them if they exist.


//Enable dragging. This has to get fixed a bit, it doesn't look the greatest but works well.
enableDrag();

//####Clock -> Put in separate file

var clockdate = new Date();
var clock = document.getElementById("clock")

function log_date(){
     clockdate = add(clockdate, {seconds: 1})
     let displaydate = format(clockdate, 'yyyy-MM-dd - hh:mm:ss a')

     clock.innerHTML = `${displaydate}`
}

setInterval(log_date, 1000)


// if (projectManager.projects){
//     for (let key in projectManager.tasks) {
//         if (projectManager.tasks.hasOwnProperty(key)) {
//             let taskData = projectManager.tasks[key];
//             projectManager.tasks[key] = new Task({projectManager: projectManager, parsing: true, jobject: taskData });
//         }
//     }
//     for (let i = 0; i < projectManager.projects.length; i++){
//         let projectObject = projectManager.projects[i]
//         projectManager.projects[i] = new Project({parsing: true, projectObject: projectObject});
//     }
// }
// constructor({ title = '', description = '', date = '', priority = '', projectManager = null, parsing = false, jobject = null }){
// var task1 = new Task({title: "Code", description: "Code up this project I've been meaning to complete", date: `${new Date()}`, priority: 5, projectManager: projectManager, parsing: true})
// var project1 = new Project({title: "Task Manager Project", description: "This is one of the projects for the Odin Project"})

// project1.addTask(task1.id)
// projectManager.addProject(project1)
// projectManager.saveData()
// projectManager = JSON.stringify(projectManager)
// projectManager = JSON.parse(projectManager)
// //At this point, we need to use our object parsers on each object in the projectManager to make sure our projects and tasks have the correct methods.
// console.log(projectManager)



// console.log(projectManager.projects)

// window.pm = projectManager



/* 



    

*/
///////// TO DO: 

//Some Prep for local storage work

class Cat{
    constructor(name){
        this.name = name;
    }
}

let malts = new Cat('malts')
let cino = new Cat('cino')

// let maltsJSON = JSON.stringify(malts)
// let cinoJSON = JSON.stringify(cino)

let mj = []
mj.push(malts)
mj.push(cino)

let example = JSON.stringify(mj)

localStorage.setItem('variable', example)

//example making a icon openable
// var icon1 = document.getElementById("todoapp");
// icon1.addEventListener('dblclick', () => makeWindow(icon1.id));

// function makeWindow(id){
//     console.log(id)
//     let pane = document.createElement("div")
//     let contentPane = document.getElementById("contentHolder");
//     pane.classList.add("windowPane")
//     pane.id="windowPane"
//     pane.draggable="false"
//     pane.innerHTML = `  <div class="windowTop" id="windowTop">
//                             <div class="buttonRed paneButton"></div>
//                             <div class="buttonYellow paneButton"></div>
//                             <div class="buttonGreen paneButton"></div>
//                             == ${id} ==
//                         </div>
//                         <div class="windowBottom">
//                             Window content for the ${id} app.
//                         </div>`
        
//     contentPane.appendChild(pane);

//     document.getElementById("windowTop").addEventListener('mousedown', dragPane);
//     let buttons = document.querySelectorAll(".paneButton");

//     buttons.forEach(button => {
//         if (button.classList.contains("buttonRed")){
//             button.addEventListener('click', () => {
//                 contentPane.removeChild(pane);
//         })};

//         if(button.classList.contains("buttonYellow")){
//             button.addEventListener('click', () => {
//                 console.log("This doesn't do anything yet.")
//             })
//         }
//         else {
//             button.addEventListener('click', () => {
//                 if (!pane.classList.contains('windowPaneMaximized')){
//                     pane.dataset.left = pane.style.left;
//                     pane.dataset.top = pane.style.top;
//                     pane.style.left = "0px";
//                     pane.style.top = "0px"
//                     pane.classList.add("windowPaneMaximized")
//                 }
//                 else {
//                     pane.style.left = pane.dataset.left;
//                     pane.style.top = pane.dataset.top;
//                     pane.classList.remove("windowPaneMaximized")
//                     }
//             }
            
//             )

//         }
//     })
    
// }

// if (localStorage.getItem('variable')){
//     console.log(JSON.parse(localStorage.getItem('variable')));
// }
// else{
//     console.log("key not found");
// }


/* WIndow Movement */
// document.addEventListener('DOMContentLoaded', () => {
    
//     document.getElementById("windowTop").addEventListener('mousedown', dragPane);
// });


/// ADDING A DRAGGABLE WINDOW:
//// Document.getElementById("windowTop").addEventListener('mousedown', dragPane);





// localStorage.setItem('variable', "Yeah mofos")

//localStorage.removeItem(key)

