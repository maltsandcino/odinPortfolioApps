import { format, add, formatDistance } from 'date-fns';
import Task from './task.js';
import Project from './project.js';
import ProjectManager from './projectManager.js'
import objectToClass from './jsonToObject.js'
import todoicon from './assets/todo.svg'
import projectIcon from './assets/project.png'
import plus from './assets/plus.png'
import todoproject from './assets/todoproj.svg'

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
    urgent.id = "toDoUrgentCount"
    urgent.classList.add("urgentTaskTitle");

    var total = document.createElement("div");
    total.id = "toDoTotalCount"
    total.classList.add("totalTaskTitle");

    //Get Urgent and Total Tasks to complete:
    var urgentTasks = 0;
    var totalTasks = 0
    // for (const key in projectManager.tasks){
    //     console.log(projectManager.tasks[key])
    // }

    Object.values(projectManager.tasks).forEach(value => {
        if (value.priority > 1 && !value.completed){
        urgentTasks++}
        if (value.completed === false){
            totalTasks++
        }
    })

    total.innerHTML = `Tasks Remaining: <span id="toDoToT">${totalTasks}</span>`
    urgent.innerHTML = `Urgent Tasks: <span class="urgent" id="urg">${urgentTasks}</span>`

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
    toDoContent.classList.remove("listTasks")
    toDoContent.classList.remove("singleTask")
    toDoContent.innerHTML = "";

    projectManager.projects.forEach(proj => {
        const projectDiv = document.createElement("div");
        projectDiv.addEventListener("click", () => accessTasks(proj));
            
        
        projectDiv.classList.add("toDoProjectDiv");
        
        var projectImg = document.createElement("img");
        projectImg.classList.add("toDoIcon")
        
        projectImg.src = todoproject;

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


function accessTasks(project){
    toDoContent.innerHTML = "";
    toDoContent.classList.add("listTasks");
    toDoContent.classList.remove("singleTask")
    let projTitle = document.createElement("h2");
    let taskListContainer = document.createElement("div");
    let infoBar = document.createElement("div");

    projTitle.classList.add("toDoProjectTitle");
    taskListContainer.classList.add("toDoLeftSide");
    infoBar.classList.add("toDoRightSide");

    projTitle.innerHTML = project.title;
    let taskList = document.createElement("ul");
    taskList.classList.add("toDoUL")
    let tasks = project.tasks;
    // if (tasks.length == 0){
    //     // toDoContent.classList.remove("listTasks")
    //     toDoContent.classList.add("emptyProject")
    //     let banner = document.createElement("p");
    //     banner.classList.add("toDoWarning");
    //     banner.innerHTML = "No tasks found in this project. Why not add some?"
        
    //     projTitle.innerHTML = "Project Title"
        
    //     let adder = document.createElement("img");
    //     adder.src = plus;
    //     adder.classList.add("smallIcon")
    //     toDoContent.append(projTitle)
    //     toDoContent.append(banner)
        
    //     return
    // }

    ///Formatting tasks into a list
    tasks.forEach(task => {
        var accessed_task = projectManager.tasks[task];
        console.group(accessed_task)

        let current_row = document.createElement("li");
        current_row.classList.add("toDoLI");
        let taskName = document.createElement("span");
        let daysLeft = formatDistance(accessed_task.date, new Date(), { addSuffix: true });
        current_row.addEventListener("click", () => getTask(project, accessed_task))
        taskName.innerHTML = accessed_task.title
        
        if (accessed_task.priority > 1){
            taskName.classList.add("urgent")
        }

        current_row.append(taskName)
        current_row.append(daysLeft)

        taskList.append(current_row)
    })

    taskListContainer.append(taskList)
    
    infoBar.innerHTML = project.description;

    toDoContent.append(projTitle);
    toDoContent.append(taskListContainer);
    toDoContent.append(infoBar);

}

function getTask(project, task){
    toDoContent.innerHTML = "";
    toDoContent.classList.add("singleTask");
    toDoContent.classList.remove("listTasks");
    let taskTitle = document.createElement("h2");
    taskTitle.innerHTML = task.title;
    taskTitle.id = "toDoTaskTitle"

    let description = task.description;
    let due_date = task.date;
    let time_left = formatDistance(task.date, new Date(), { addSuffix: true });
    console.log(time_left)
    let projectName = project.title;
    let priority;
    if(task.priority > 1){
        priority = "high";
    }
    else if(task.priority > 0){
        priority = "medium";
    }
    else {
        priority = "low"
    }

    let completed = task.completed
    let att1 = document.createElement("span");
    att1.innerHTML = description;
    att1.id = 'toDoTaskDesc'

    att1.classList.add("toDoTaskDescription");

    let att2 = document.createElement("span");
    att2.innerHTML = `Project:  ${projectName}`
    att2.id = 'toDoTaskName'

    let att3 = document.createElement("span");
    att3.innerHTML = `Priority:     ${priority}`
    att3.id = 'toDoTaskPrior'

    let att4 = document.createElement("span");
    att4.innerHTML = `Due Date:     ${due_date} <span class="grey">(${time_left})</span>`
    att4.id = 'toDoTaskTime'

    let att5 = document.createElement("span");
    att5.innerHTML = `Completed:    ${completed}`
    att5.addEventListener('click', () => completeTask(task, att5))
    att5.id = 'toDoTaskComp'

    let deleteDiv = document.createElement("div");
    deleteDiv.innerHTML = "Delete Task"
    deleteDiv.id = 'toDoDelTask'
    deleteDiv.addEventListener('click', () => {
        if(task.priority > 1){urgentTasks--}

        project.removeTask(task.id, projectManager);
        var urg = document.getElementById("urg")
        var urgval = parseInt(urg.innerHTML)
        var tot = document.getElementById("toDoToT")
        var totval = parseInt(tot.innerHTML)
        accessTasks(project)
        
        if(task.priority > 1 && task.completed){
            // urgval++;
            // urg.innerHTML = urgval
            }
        if(task.priority > 1 && !task.completed){
            urgval--;
            urg.innerHTML =urgval}
        if(task.completed){
            // totval--;
            // tot.innerHTML = totval;
        }
        else{
            totval--;
            tot.innerHTML = totval;
        }
          projectManager.saveData()}
    )
    toDoContent.append(taskTitle);
    toDoContent.append(att1);
    toDoContent.append(att2);
    toDoContent.append(att3);
    toDoContent.append(att4);
    toDoContent.append(att5);
    toDoContent.append(deleteDiv);



    //Description, Due Date, Time Left, Priority,
}

function completeTask(task, div){
    var urg = document.getElementById("urg")
    var urgval = parseInt(urg.innerHTML)
    var tot = document.getElementById("toDoToT")
    var totval = parseInt(tot.innerHTML)
    console.log(task.priority)
    task.changeStatus()
    div.innerHTML = `Completed: ${task.completed}`
    projectManager.saveData()
    if(task.priority > 1 && task.completed){
        urgval--;
        urg.innerHTML = urgval}
    if(task.priority > 1 && !task.completed){
        urgval++;
        urg.innerHTML =urgval}
    if(task.completed){
        totval--;
        tot.innerHTML = totval;
    }
    else{
        totval++;
        tot.innerHTML = totval;
    }
    

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