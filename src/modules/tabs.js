export default class Projects {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'))
        this.projects.push(new Project('Week'))
        this.projects.push(new Project('Month'))
    }

    setProject(projects) {
        this.projects = projects;
    }

    getProjects() {
        return this.projects;
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

    deleteProject(targetName) {
        const ind = this.projects.find((project) => project.getName() == targetName);

        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }
}