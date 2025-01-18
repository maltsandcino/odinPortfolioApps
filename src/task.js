import { format } from 'date-fns';


/*
====Attributes
    Title       - String
    Description - String
    Due Date    - Date or String, it can be handled either way.
    Priority    - Number
    Completed   - Boolean
    ID          - Number, an IDGenerator object is passed to the object to produce.

====Object Methods:
    Constructor(Title, Description, Due Date, Priority, IDGenerator)
    ModifyTitle
    ModifyDescription
    ModifyDueDate
    ModifyPriority
    changeStatus
    DeleteTask <- Maybe this should actually be a part of Project.
*/


class Task {

    constructor({ title = '', description = '', date = '', priority = '', projectManager = null, parsing = false, jobject = null }){
        if(parsing && jobject){
            this.parseTask(jobject, projectManager)
        }
        else{
            console.log(title)
            console.log(description)
        this.title = title;
        this.description = description;
        this.date = format(date, 'MMMM dd, yyyy');
        this.priority = priority;
        this.completed = false;
        this.id = projectManager.generate();
        projectManager.hashTask(this);}
    }

    toString(){
        return `Task: ${this.title}`
    }

    modifyTitle(newTitle){
        this.title = newTitle;
    }
    modifyDescription(newDescription){
        this.description = newDescription;
    }
    modifyDate(newDate){
        this.date = format(new Date(newDate), 'MMMM dd, yyyy');
    }
    modifyPriority(newPriority){
        this.priority = newPriority;
    }
    changeStatus(){
        if(this.completed === true){
            this.completed = false;
        }
        else{
            this.completed = true
        }
    }
    parseTask(jobject, projectManager){
        this.title = jobject.title;
        this.description = jobject.description;
        this.date = jobject.date;
        this.priority = jobject.priority;
        this.completed = jobject.completed;
        this.id = jobject.id;
        projectManager.tasks[jobject.id] = this
    }
}

export default Task