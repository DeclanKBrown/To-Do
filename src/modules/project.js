export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }
    
    getTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task)
    }

    renameTask(name, newName) {
        const TODO = this.tasks.find((task) => task.getName() == name);
        TODO.setName(newName);
    }

    dateTask(date, name) {
        const TODO = this.tasks.find((task) => task.getName() == name);
        TODO.setDate(date);
    }

    deleteTask(name, sameName) {
        if (sameName) {
            const firstTODOIndex = this.tasks.findIndex((task) => task.getName() === name);

            if (firstTODOIndex !== -1) {
                const secondTODOIndex = this.tasks.findIndex((task, index) => index !== firstTODOIndex && task.getName() === name);
            
                if (secondTODOIndex !== -1) {
                    this.tasks.splice(secondTODOIndex, 1);
                }
            }
        } else {
            const TODO = this.tasks.find((task) => task.getName() == name);
    
            this.tasks.splice(this.tasks.indexOf(TODO), 1);
        }
    }


}