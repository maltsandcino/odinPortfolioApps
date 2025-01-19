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

