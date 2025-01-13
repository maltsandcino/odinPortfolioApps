import { format, add } from 'date-fns';
import Task from './task.js';
import Project from './project.js';
import ProjectManager from './projectManager.js'
import objectToClass from './jsonToObject.js'
import todoicon from './assets/todo.svg'
import projectIcon from './assets/project.png'
import plus from './assets/plus.png'

if(!projectManager){
var projectManager = new ProjectManager;
objectToClass(projectManager);}

console.log(projectManager);


//Create Container and three main elements
    var contentContainer = document.createElement("div");
    contentContainer.classList.add("windowBottom", "toDoContainer")

    var toDoTop = document.createElement("div");
    toDoTop.classList.add("toDoTop");

    var toDoNav = document.createElement("div");
    toDoNav.classList.add("toDoNav");

    var toDoContent = document.createElement("div");
    toDoContent.classList.add("toDoContent");

//Create App Picture, App Title Div, Urgent Tasks, Total Tasks 
    var title = document.createElement("div")
    title.classList.add("appTitle");
    title.id = "toDoTitle";
    title.innerHTML = "Projects"

    var urgent = document.createElement("div");
    urgent.classList.add("urgentTaskTitle");

    var total = document.createElement("div");
    total.classList.add("totalTaskTitle");

    //Get Urgent and Total Tasks to complete:
    var urgentTasks = 0;
    var totalTasks = 0
    // for (const key in projectManager.tasks){
    //     console.log(projectManager.tasks[key])
    // }

    Object.values(projectManager.tasks).forEach(value => {
        if (value.priority > 1){
        urgentTasks++}
        if (value.completed === false){
            totalTasks++
        }
    })

    total.innerHTML = `Tasks Remaining: ${totalTasks}`
    urgent.innerHTML = `Urgent Tasks: <span class="urgent">${urgentTasks}</span>`

    //img node
    var toDoImg = document.createElement('img')
    toDoImg.src = todoicon
    toDoImg.classList.add("smallIcon")
    toDoImg.classList.add("toDoAppTitleImg")

//Appending elements to top of app bar
    toDoTop.appendChild(toDoImg);
    toDoTop.appendChild(title);
    toDoTop.appendChild(urgent);
    toDoTop.appendChild(total);

//Create new Project icon and Current Projects icon for nav
    var cholder = document.createElement("div");
    cholder.classList.add("navIconContainerToDo");
    cholder.addEventListener('click', loadProjects)
    var nholder = document.createElement("div");
    nholder.classList.add("navIconContainerToDo");
    nholder.addEventListener('click', createNewProject)

    var currentProjects = document.createElement("img");
    currentProjects.src = projectIcon;
    currentProjects.classList.add("todonavicon");

    var cproj = document.createElement("div")
    cproj.innerHTML = "Current Projects"

    var newProject = document.createElement("img");
    newProject.classList.add("todonavicon");
    newProject.src = plus;

    var nproj = document.createElement("div");
    nproj.innerHTML = "New Project"

    cholder.appendChild(currentProjects)
    cholder.appendChild(cproj)

    nholder.appendChild(newProject)
    nholder.appendChild(nproj)

//Append to Nav
    toDoNav.append(cholder);
    toDoNav.append(nholder);

//Content to be generated in the content Pane will vary depending on the actual function being called.

//Appending constituent elements
contentContainer.appendChild(toDoTop);
contentContainer.appendChild(toDoNav);
contentContainer.appendChild(toDoContent);

// function to load projects and populate content pane
function loadProjects(){
    toDoContent.innerHTML = "";

    projectManager.projects.forEach(proj => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("toDoProjectDiv");
        
        const projectImg = document.createElement("img");
        projectImg.classList.add("icon")
        projectImg.src = projectIcon;

        const projectName = document.createElement("span");
        if(!proj.title == ""){
        projectName.innerHTML = proj.title;}
        else{
            projectName.innerHTML = "Untitled Project"
        }
        

        projectDiv.append(projectImg);
        projectDiv.append(projectName);

        //We need an event listener to load the particular project.
        toDoContent.append(projectDiv);

        })
    
}

function createNewProject(){
    console.log("create New Project")
}

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