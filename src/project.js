/*

=====Attributes

Title               - String
Description         - String
Completed Tasks     - Number
Total Tasks         - Number
a list of Task objects  - Set of IDs


=====Object Methods:

    Constructor(Title, Description)
    ModifyTitle
    ModifyDescription
    AddTask
    RemoveTask
    

*/

class Project {
    constructor({title = '', description = '', parsing = false, projectObject = null}){
        if(parsing === true && projectObject){
            this.parseProject(projectObject)
        }
        else{
        this.title = title;
        this.description = description;
        this.tasks = [];
        this.totalTasks = 0
        this.completedTasks = 0
        }
    }

    toString(){
        return `Project: ${this.title}`
    }

    modifyTitle(newTitle){
        this.title = newTitle
    }

    modifyDescription(newDescription){
        this.description = newDescription;
    }

    addTask(newTask){
        //should pass the ID of the task here.
        this.tasks.push(newTask)
        this.totalTasks++
    }

    removeTask(removeTask, projectManager){
        //we can pass either a task object or a value here.
        //Let the projectmanager object check the status of the task

        ////Update: Let's just pass the task ID --> This may need to be converted to a string, but I think an int is fine.
        //get index of task to remove
        let index = this.tasks.indexOf(removeTask)
        if(index > -1){
            this.tasks.splice(index, 1)
            this.totalTasks--
            
            if(projectManager.checkTaskStatus(removeTask)){
                this.completedTasks--
            }
            projectManager.removeTask(removeTask)
            //if the task was complete, we shold also lower the total number of completed tasks
        }
        else return "This task was not found in the project."
    }

    parseProject(projectObject){
        this.title = projectObject.title;
        this.description = projectObject.description;
        this.tasks = projectObject.tasks;
        this.totalTasks = projectObject.totalTasks;
        this.completedTasks = projectObject.completedTasks;
    }

}

export default Project