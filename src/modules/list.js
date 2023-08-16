import Project from './project.js'
import TODO from './todo.js'

export default class List {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('Week'));
        this.projects.push(new Project('Month'));
        this.projects.push(new Project('Anytime'));
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }


    addProject(newProject) {
        this.projects.push(newProject);
    }

    deleteProject(targetName, sameName) {
        if (sameName) {
            const indexToDelete = this.projects.findIndex((project) => project.getName() === targetName);

            if (indexToDelete !== -1) {
                const secondIndexToDelete = this.projects.findIndex((project, index) => index !== indexToDelete && project.getName() === targetName);
            
                if (secondIndexToDelete !== -1) {
                    this.projects.splice(secondIndexToDelete, 1);
                }
            }
        } else {
            const projectToDelete = this.projects.find((project) => project.getName() == targetName);
    
            this.projects.splice(this.projects.indexOf(projectToDelete), 1);
        }
    }

    renameProject(name, newName) {
        const proj = this.projects.find((project) => project.getName() == name);

        proj.setName(newName);
    }


    addTask(task, projName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.addTask(task)
    }

    renameTask(name, newName, projName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.renameTask(name, newName)
    }

    deleteTask(task, projName) {
        const proj = this.projects.find((project) => project.getName() == projName);

        proj.deleteTask(task)
    }
}