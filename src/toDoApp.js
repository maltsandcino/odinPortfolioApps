import { format, add } from 'date-fns';
import Task from './task.js';
import Project from './project.js';
import ProjectManager from './projectManager.js'
import objectToClass from './jsonToObject.js'

var projectManager = new ProjectManager;
objectToClass(projectManager);



var contentContainer = document.createElement("div");
contentContainer.classList.add("windowBottom", "toDoContainer")
contentContainer.innerHTML = "check, todoapp"

export default contentContainer;

/* <div class="windowBottom">
    Window content for the ${id} app.
</div>` */


// A) Objects To Include:
//     1. Task Object
//     2. Project Object (Default Project Object should be created before needing to sign in)
//     3. A task ID object which tracks Tasks, and generates an ID

// Task object should contain the following information:
// Title       - String
// Description - String
// Due Date    - Date
// Priority    - Number
// Completed   - Boolean
// ID          - Number

// Project object should contain: 

// Title       - String
// Description - String
// Completed Tasks - Number of Number
// a list of Task objects  - Set of IDs



// Project Manager Object should contain:

// Next_Task_ID - Number
// List of Tasks - HashTable
// List of Projects - Array

// B) Modules and Logic:

//     The logic and methods of each object should be contained in separate modules. These should
//     be imported into index.js, and the logic for these should be separate from DOM manipulation.

//     Task Object Methods:
//     Constructor(Title, Description, Due Date, Priority, ProjectManager)
//     ModifyTitle
//     ModifyDescription
//     ModifyDueDate
//     ModifyPriority
//     DeleteTask

//     Project Object Methods:
//     Constructor(Title, Description)
//     ModifyTitle
//     ModifyDescription
//     DeleteProject

//     Task ID Object Methods:
//     addProject()
//     Generate ID()

//     Non-Object-Functions and logic, to be done in main file:

//     1) JSON.stringify Project Objects + Task Objects on Creation of Each Task / Project / ID Generator
//     2) Save these to localStorage Variables
//     3) IIFE on DOMContentLoaded -> JSON.Parse these, tasks first, then objects, to add to DOM on start if not already existing.

//     4) SPA Functions to handle: Start Page, New Task Page, New Project Page, View Project Page, View Task Page
//         I may break these functions up into smaller DOM management objects.


//     ########Remember These Points while programming this #########
//         Always check localstorage BEFORE any content actually is loaded, localStorage.getItem('projectManager').
//         This will get me the data I need back from the local storage, but I will still have to convert this into a project manager type object. I can actually add a check for local storage
//         into the constructor of Project Manager, by calling load data from there..

//         Note: If I want to use the class methods for Task and Project, I will have to reconvert these to Tasks and Projects Here, to avoid making too many dependencies in a different file.

//         To create a new task, we must already have a project created.

//         We should then create a new Task object. Once this is created, we have to add it to the project. Theoretically, it could just exist and hangout in the projectManager hashmap,
//         but it will be difficult to access this particular task if we do it this way.

//         Every time we add a new task or project, projectManager needs to be readded to local storage (JSON.stringify()). This is because all projects are tracked in PM, and all tasks are hashed
//         here as well.