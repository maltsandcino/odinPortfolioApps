import Task from './task.js';
import Project from './project.js'

function objectToClass(projectManager){
        if (projectManager.projects){
        for (let key in projectManager.tasks) {
            if (projectManager.tasks.hasOwnProperty(key)) {
                let taskData = projectManager.tasks[key];
                projectManager.tasks[key] = new Task({projectManager: projectManager, parsing: true, jobject: taskData });
            }
        }
        for (let i = 0; i < projectManager.projects.length; i++){
            let projectObject = projectManager.projects[i]
            projectManager.projects[i] = new Project({parsing: true, projectObject: projectObject});
        }
    }
}

export default objectToClass