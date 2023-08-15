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

    deleteTask(name) {
        const TODO = this.tasks.find((task) => task.getName() == name);

        this.tasks.splice(this.tasks.indexOf(TODO), 1);
    }


}