import Project from './project.js'
import TODO from './todo.js'

export default class List {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'))
        this.projects.push(new Project('Week'))
        this.projects.push(new Project('Month'))
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

    findProject(name) {
        return this.projects.find((project) => project.getName() == name);
    }

    deleteProject(targetName) {
        const projectToDelete = this.projects.find((project) => project.getName() == targetName);

        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }

    renameProject(name, newName) {
        const proj = this.projects.find((project) => project.getName() == name);

        proj.setName(newName);
    }

    Print() {
        for (const project of this.projects) {
            console.log(project.getName());
        }
    }
}