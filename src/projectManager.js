/*
 
Project Manager Object should contain:

Next_Task_ID - Number
List of Tasks - Array
List of Projects - Array

Task ID Object Methods:
    addProject()
    Generate ID()
    hashTask()
    checkTaskStatus()
    changeStatus()
    deleteProject()

*/

class ProjectManager {
    constructor(){
        this.projects = [];
        this.tasks = {};
        this.nextID = 0;
        this.loadData()     
    }

    removeTask(taskID){
        delete this.tasks[taskID];
    }

    generate(){
        let val = this.nextID;
        this.nextID++;
        return val
    }

    addProject(project){
        this.projects.push(project);
    }

    hashTask(task){
        this.tasks[task.id] = task;
    }

    checkTaskStatus(id){
        let task = this.tasks[id]
        return task.completed
    }

    changeStatus(id, project){
        //requires id of task to do this, also requires the project.
        console.log("changing status")
        console.group(project)
        let task = this.tasks[id];
        task.changeStatus()
        if (task.completed === true){
            project.completedTasks++
        }
        else{
            project.completedTasks--
        }
        console.group(project)
    }

    deleteProject(project){
        let index = this.projects.indexOf(project)
        this.projects.splice(index, 1)
    }

    loadData(){
        if(localStorage.getItem('projectManager')){
            let oldData = JSON.parse(localStorage.getItem('projectManager'));
            this.projects = oldData.projects;
            this.tasks = oldData.tasks;
            this.nextID = oldData.nextID;
        }
    }

    saveData(){
        localStorage.setItem('projectManager', JSON.stringify(this));
    }

}

export default ProjectManager;