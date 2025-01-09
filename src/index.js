import { format, add } from 'date-fns';
import Task from './task.js';
import Project from './project.js';
import ProjectManager from './projectManager.js'
import objectToClass from './jsonToObject.js'
import enableDrag from './drag.js'
import dragPane from './dragPane.js'
import './styles.css'

//Create project manager. This checks for existing program managers. IT also parses them if they exist.
var projectManager = new ProjectManager;
objectToClass(projectManager);
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
console.log(projectManager)



// console.log(projectManager.projects)

// window.pm = projectManager



/* 

A) Objects To Include:
    1. Task Object
    2. Project Object (Default Project Object should be created before needing to sign in)
    3. A task ID object which tracks Tasks, and generates an ID

Task object should contain the following information:
Title       - String
Description - String
Due Date    - Date
Priority    - Number
Completed   - Boolean
ID          - Number

Project object should contain: 

Title       - String
Description - String
Completed Tasks - Number of Number
a list of Task objects  - Set of IDs



Project Manager Object should contain:

Next_Task_ID - Number
List of Tasks - HashTable
List of Projects - Array

B) Modules and Logic:

    The logic and methods of each object should be contained in separate modules. These should
    be imported into index.js, and the logic for these should be separate from DOM manipulation.

    Task Object Methods:
    Constructor(Title, Description, Due Date, Priority, ProjectManager)
    ModifyTitle
    ModifyDescription
    ModifyDueDate
    ModifyPriority
    DeleteTask

    Project Object Methods:
    Constructor(Title, Description)
    ModifyTitle
    ModifyDescription
    DeleteProject

    Task ID Object Methods:
    addProject()
    Generate ID()

    Non-Object-Functions and logic, to be done in main file:

    1) JSON.stringify Project Objects + Task Objects on Creation of Each Task / Project / ID Generator
    2) Save these to localStorage Variables
    3) IIFE on DOMContentLoaded -> JSON.Parse these, tasks first, then objects, to add to DOM on start if not already existing.

    4) SPA Functions to handle: Start Page, New Task Page, New Project Page, View Project Page, View Task Page
        I may break these functions up into smaller DOM management objects.


    ########Remember These Points while programming this #########
        Always check localstorage BEFORE any content actually is loaded, localStorage.getItem('projectManager').
        This will get me the data I need back from the local storage, but I will still have to convert this into a project manager type object. I can actually add a check for local storage
        into the constructor of Project Manager, by calling load data from there..

        Note: If I want to use the class methods for Task and Project, I will have to reconvert these to Tasks and Projects Here, to avoid making too many dependencies in a different file.

        To create a new task, we must already have a project created.

        We should then create a new Task object. Once this is created, we have to add it to the project. Theoretically, it could just exist and hangout in the projectManager hashmap,
        but it will be difficult to access this particular task if we do it this way.

        Every time we add a new task or project, projectManager needs to be readded to local storage (JSON.stringify()). This is because all projects are tracked in PM, and all tasks are hashed
        here as well.

    

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

if (localStorage.getItem('variable')){
    console.log(JSON.parse(localStorage.getItem('variable')));
}
else{
    console.log("key not found");
}

document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById("windowTop").addEventListener('mousedown', dragPane);
});


/// ADDING A DRAGGABLE WINDOW:
//// Document.getElementById("windowTop").addEventListener('mousedown', dragPane);





// localStorage.setItem('variable', "Yeah mofos")

//localStorage.removeItem(key)

