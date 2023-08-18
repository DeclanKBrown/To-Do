import TODO from './todo'
import Project from './project'
import List from './list'

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data))
  }

  static getTodoList() {
    const todoList = Object.assign(
      new List(),
      JSON.parse(localStorage.getItem('todoList')),
    )

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project)),
    )

    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((todo) => Object.assign(new TODO(), todo)),
        ),
      )

    return todoList
  }

  static addProject(project) {
    const todoList = Storage.getTodoList()
    todoList.addProject(project)
    Storage.saveTodoList(todoList)
  }

  static renameProject(name, newName) {
    const todoList = Storage.getTodoList()
    todoList.renameProject(name, newName)
    Storage.saveTodoList(todoList)
  }

  static deleteProject(name, sameName) {
    const todoList = Storage.getTodoList()
    todoList.deleteProject(name, sameName)
    Storage.saveTodoList(todoList)
  }

  static addTask(task, projName) {
    const todoList = Storage.getTodoList()
    todoList.addTask(task, projName)
    Storage.saveTodoList(todoList)
  }

  static renameTask(name, newName, projName) {
    const todoList = Storage.getTodoList()
    todoList.renameTask(name, newName, projName)
    Storage.saveTodoList(todoList)
  }

  static dateTask(date, taskName, projName) {
    const todoList = Storage.getTodoList()
    todoList.dateTask(date, taskName, projName)
    Storage.saveTodoList(todoList)
  }

  static deleteTask(task, projName, sameName) {
    const todoList = Storage.getTodoList()
    todoList.deleteTask(task, projName, sameName)
    Storage.saveTodoList(todoList)
  }

  static deleteTimeTask(task, sameName) {
    const todoList = Storage.getTodoList()
    todoList.getProjects().forEach((project) => {
      project.deleteTask(task, sameName)
    })
    Storage.saveTodoList(todoList)
  }

  static renameTimeTask(name, newName) {
    const todoList = Storage.getTodoList()
    todoList.getProjects().forEach((project) => {
      project.renameTask(name, newName)
    })
    Storage.saveTodoList(todoList)
  }
}
