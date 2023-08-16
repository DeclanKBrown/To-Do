import TODO from './todo.js'
import Project from './project.js'
import List from './list.js'

export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(new List(), JSON.parse(localStorage.getItem('todoList')))

        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)))

        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((todo) => Object.assign(new TODO(), todo))))

        return todoList
    }


    static addProject(project) {
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static renameProject(name, newName) {
        const todoList = Storage.getTodoList();
        todoList.renameProject(name, newName);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(name, sameName) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(name, sameName);
        Storage.saveTodoList(todoList);
    }


    static addTask(task, projName) {
        const todoList = Storage.getTodoList();
        todoList.addTask(task, projName);
        Storage.saveTodoList(todoList);
    }

    static renameTask(name, newName, projName) {
        const todoList = Storage.getTodoList();
        todoList.renameTask(name, newName, projName);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(task, projName) {
        const todoList = Storage.getTodoList();
        todoList.deleteTask(task, projName);
        Storage.saveTodoList(todoList);
    }
}