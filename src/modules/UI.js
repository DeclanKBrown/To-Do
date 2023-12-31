import TODO from './todo'
import Project from './project'
import Storage from './storage'

export default class UI {
  static loadHome() {
    UI.sidebar()
    UI.main()
    UI.loadProjects()
    UI.openProject(document.querySelector('#Inbox'), true)
    UI.mode(true)
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (
          project.getName() !== 'Inbox' &&
          project.getName() !== 'Today' &&
          project.getName() !== 'Week' &&
          project.getName() !== 'Month' &&
          project.getName() !== 'Anytime'
        ) {
          UI.addProject(project.getName(), true)
        }
      })
  }

  static sidebar() {
    const aside = document.createElement('aside')
    aside.innerHTML = `
        <div class='aside-upper-cont'>
        </div>
        <div class='aside-inner'>
            <div class='aside-top'>
                <div class='side-tab side-tab-sel' id='Inbox'>
                    <span>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <path d='M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' />
                        </svg>
                    </span>
                    <h1>Inbox</h1>
                </div>
                <div class='time-container'>
                    <div class='side-tab' id='Today'>
                        <span>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path d='M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z' />
                            </svg>
                        </span>
                        <h1>Today</h1>
                    </div>
                    <div class='side-tab' id='Week'>
                        <span>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path d='M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z' />
                            </svg>
                        </span>
                        <h1>Week</h1>
                    </div>
                    <div class='side-tab' id='Month'>
                        <span>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path d='M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z' />
                            </svg>
                        </span>
                        <h1>Month</h1>
                    </div>
                </div>
                <div class='projects-container'>
                    <div class='side-tab' id='Projects'>
                        <span>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                                <path d='M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z' />
                            </svg>
                        </span>
                        <h1>Projects</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class='aside-bottom'>
            <div class='aside-bottom-inner'>
                <div class='side-tab add-project'>
                    <span>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                            <path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z'></path>
                        </svg>
                    </span>
                    <h1>Add Project</h1>
                </div>
            </div>
        </div>`

    document.body.appendChild(aside)
    UI.initButtons()
  }

  static initButtons() {
    const tabs = document.querySelectorAll('.side-tab')
    const addBtn = document.querySelector('.add-project')

    tabs.forEach((tab) => tab.addEventListener('click', () => UI.tab(tab)))
    addBtn.addEventListener('click', () => UI.addProject('New Project'))
  }

  static tab(Tab) {
    UI.removeTabStyle()
    UI.tabStyle(Tab)
    UI.removeTab()
    if (Tab.id === 'Today') {
      UI.openToday(Tab)
    } else if (Tab.id === 'Week') {
      UI.openWeek(Tab)
    } else if (Tab.id === 'Month') {
      UI.openMonth(Tab)
    } else if (Tab.id === 'Projects') {
      UI.openProjDisp(Tab)
    } else {
      UI.openProject(Tab, true)
    }
  }

  static openToday(Tab) {
    document.querySelector('.title').innerHTML = Tab.id
    document.querySelector('.add-to-do').style = 'display:none'

    const todoList = Storage.getTodoList()

    todoList.getProjects().forEach((proj) => {
      proj.getTasks().forEach((task) => {
        const taskDate = task.getDate()
        if (taskDate !== 'No Date') {
          const [day, month, year] = taskDate.split('-')
          const parsedDate = new Date(`${year}-${month}-${day}`)
          const currentDate = new Date()

          parsedDate.setHours(0, 0, 0, 0)
          currentDate.setHours(0, 0, 0, 0)

          if (parsedDate.getTime() === currentDate.getTime()) {
            UI.addTask(task.getName(), task.getDate(), false)
          }
        }
      })
    })
  }

  static openWeek(Tab) {
    document.querySelector('.title').innerHTML = Tab.id
    document.querySelector('.add-to-do').style = 'display:none'

    const todoList = Storage.getTodoList()
    const today = new Date()

    todoList.getProjects().forEach((proj) => {
      proj.getTasks().forEach((task) => {
        const taskDate = task.getDate()
        if (taskDate !== 'No Date') {
          const [day, month, year] = taskDate.split('-')
          const parsedDate = new Date(`${year}-${month}-${day}`)

          // Calculate the start and end of the current week
          const startOfWeek = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() - today.getDay(),
          )
          const endOfWeek = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + (6 - today.getDay()),
          )

          if (parsedDate >= startOfWeek && parsedDate <= endOfWeek) {
            UI.addTask(task.getName(), task.getDate(), false)
          }
        }
      })
    })
  }

  static openMonth(Tab) {
    document.querySelector('.title').innerHTML = Tab.id
    document.querySelector('.add-to-do').style = 'display:none'

    const todoList = Storage.getTodoList()
    const today = new Date()

    todoList.getProjects().forEach((proj) => {
      proj.getTasks().forEach((task) => {
        const taskDate = task.getDate()
        if (taskDate !== 'No Date') {
          const [day, month, year] = taskDate.split('-')
          const parsedDate = new Date(`${year}-${month}-${day}`)

          // Calculate the start and end of the current month
          const startOfMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            1,
          )
          const endOfMonth = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0,
          )

          if (parsedDate >= startOfMonth && parsedDate <= endOfMonth) {
            UI.addTask(task.getName(), task.getDate(), false)
          }
        }
      })
    })
  }

  static openProjDisp(Tab) {
    document.querySelector('.title').innerHTML = Tab.id
    document.querySelector('.add-to-do').style = 'display:none'

    const card = document.createElement('div')
    card.classList.add('cards-container')
    document.querySelector('.main-inner').appendChild(card)

    Storage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (
          project.getName() !== 'Inbox' &&
          project.getName() !== 'Today' &&
          project.getName() !== 'Week' &&
          project.getName() !== 'Month'
        ) {
          UI.addProjCard(project)
        }
      })
  }

  static addProjCard(project) {
    const card = document.createElement('div')
    card.classList.add('proj-card')
    card.innerHTML = `
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M16.82,15.19L12.71,11.08C13.12,10.04 12.89,8.82 12.03,7.97C11.13,7.06 9.78,6.88 8.69,7.38L10.63,9.32L9.28,10.68L7.29,8.73C6.75,9.82 7,11.17 7.88,12.08C8.74,12.94 9.96,13.16 11,12.76L15.11,16.86C15.29,17.05 15.56,17.05 15.74,16.86L16.78,15.83C17,15.65 17,15.33 16.82,15.19Z' />
        </svg>
        <h2>${project.getName()}</h2>
        <span>Tasks: ${project.getCount()}</span>`
    document.querySelector('.cards-container').appendChild(card)
  }

  static removeTabStyle() {
    const tabs = document.querySelectorAll('.side-tab')
    tabs.forEach((tab) => tab.classList.remove('side-tab-sel'))
  }

  static tabStyle(e) {
    e.classList.add('side-tab-sel')
  }

  static delProj(proj, sameName = false) {
    proj.parentNode.children[1].style.textDecoration = 'line-through'
    const name = proj.parentNode.id

    setTimeout(() => {
      proj.parentNode.parentNode.remove()
      UI.tab(document.getElementById('Inbox'))
    }, 250)

    Storage.deleteProject(name, sameName) // Modules
  }

  static addProject(projName, pageLoad = false) {
    const proj = document.createElement('div')
    proj.id = 'projectsCont'
    proj.innerHTML = `
        <div class='side-tab new-project' id='${projName}'>
            <span>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.24,7.76C15.07,6.58 13.53,6 12,6V12L7.76,16.24C10.1,18.58 13.9,18.58 16.24,16.24C18.59,13.9 18.59,10.1 16.24,7.76Z' />
                </svg>
            </span>
            <span class='project-name'>${projName}</span>
            <div class='del'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z' />
                </svg>
            </div>
        </div>`
    document.querySelector('.projects-container').appendChild(proj)

    UI.initProject(projName, pageLoad)

    if (projName === 'New Project' && !pageLoad) {
      Storage.addProject(new Project('New Project')) // Modules
      UI.openProject(proj.firstElementChild)
    }
  }

  static initProject(projName, pageLoad = false) {
    const project =
      document.querySelectorAll('.new-project')[
        document.querySelectorAll('.new-project').length - 1
      ]
    project.addEventListener('click', () => UI.tab(project))

    if (projName === 'New Project' && !pageLoad) {
      project.classList.add('side-tab-sel')
    }

    const text =
      document.querySelectorAll('.project-name')[
        document.querySelectorAll('.project-name').length - 1
      ]
    text.addEventListener('click', () => UI.renameProject(text))

    const del =
      document.querySelectorAll('.del')[
        document.querySelectorAll('.del').length - 1
      ]
    del.addEventListener('click', () => UI.delProj(del))
  }

  static renameProject(input) {
    if (input.parentNode.classList.contains('side-tab-sel')) {
      const inputField = document.createElement('input')

      inputField.type = 'text'
      inputField.classList.add('name-proj')
      if (input.innerHTML !== 'New Project') {
        inputField.value = input.innerHTML
      }

      const oldName = input.innerHTML.trim()

      input.parentNode.replaceChild(inputField, input)

      inputField.focus()

      inputField.addEventListener('input', () =>
        UI.checkProjName(
          inputField,
          inputField.value.trim(),
          oldName,
          false,
          false,
        ),
      )

      inputField.addEventListener('blur', () => {
        if (inputField.value === '') {
          inputField.value = 'New Project'
          inputField.parentNode.id = 'New Project'
        } else {
          inputField.parentNode.id = inputField.value.trim()
        }

        const name = input.innerHTML.trim()

        Storage.renameProject(input.innerHTML.trim(), inputField.value.trim()) // Modules

        input.innerHTML = inputField.value.trim()
        document.querySelector('.title').innerHTML = inputField.value.trim()
        inputField.parentNode.replaceChild(input, inputField)

        UI.checkProjName(
          input,
          inputField.value.trim(),
          name,
          true,
          inputField.classList.contains('input-error'),
        )
      })
    }
  }

  static checkProjName(projDOM, name, oldName, isBlur, okDel) {
    const list = Storage.getTodoList()
    let isSame = false

    list.getProjects().forEach((proj) => {
      if (isBlur) {
        if (okDel && proj.getName() === name) {
          projDOM.classList.add('input-error')
          UI.delProj(projDOM.parentNode.children[2], true)
        }
      } else if (proj.getName() === name && name !== oldName) {
        isSame = true
        projDOM.classList.add('input-error')
      } else if (!isSame) {
        projDOM.classList.remove('input-error')
        isSame = false
      }
    })
  }

  static main() {
    const main = document.createElement('main')
    main.innerHTML = `
        <div class='main-upper'>
            <div class='mode-tog'>
                <svg class='mode' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <path d='M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13' />
                </svg>
            </div>
        </div>
        <div class='main-inner'>
            <div class='main-inner-upper'>
                <h1 class='title'>Inbox</h1>
            </div>
            <div class='tasks-container'>
            </div>
            <div class='add-to-do-container'>
                <div class='add-to-do'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
                    </svg>
                    <h3>Add Task</h3>
                </div>
            </div>
        </div>
        <div class='main-bottom'>
            <div class='footer'>
                <span>Copyright © 2023 Declankb</span>
                <a href='https://github.com/DeclanKBrown' target='_blank' rel='noopener noreferrer'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                        <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
                    </svg>
                </a>
            </div>
        </div>
        `
    document.body.appendChild(main)
    UI.initMainButtons()
  }

  static initMainButtons() {
    const addTask = document.querySelector('.add-to-do')
    const toggleMode = document.querySelector('.mode-tog')

    addTask.addEventListener('click', () => UI.addTask('New Task'))
    toggleMode.addEventListener('click', () => UI.mode(false))
  }

  static removeTab() {
    document.querySelector('.title').innerHTML = ''
    document.querySelector('.tasks-container').innerHTML = ''
    if (document.querySelector('.cards-container') !== null) {
      document.querySelector('.cards-container').remove()
    }
  }

  static openProject(Tab, pageLoad = false) {
    document.querySelector('.title').innerHTML = Tab.id
    document.querySelector('.add-to-do').style = 'display:grid'

    const proj = Storage.getTodoList()
      .getProjects()
      .find((project) => project.getName() === Tab.id)
    if (proj !== undefined) {
      proj
        .getTasks()
        .forEach((task) => UI.addTask(task.getName(), task.getDate(), pageLoad))
    }
  }

  static mode(onload) {
    const root = document.documentElement
    let newTheme

    if (onload) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        newTheme = 'dark'
      }
    } else {
      newTheme = root.className === 'dark' ? 'light' : 'dark'
    }
    root.className = newTheme

    const icon = document.querySelector('.mode-tog')
    if (newTheme === 'dark') {
      icon.innerHTML = `<svg class='mode' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z' /></svg>`
    } else {
      icon.innerHTML = `<svg class='mode' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13' /></svg>`
    }
  }

  static addTask(name, date, pageLoad) {
    if (date === undefined) {
      date = 'No Date'
    }
    const taskDOM = document.createElement('div')
    taskDOM.id = name
    taskDOM.classList.add('task')
    taskDOM.innerHTML = `
        <div class='check-box unchecked'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' />
            </svg>
        </div>
        <h3 class='ind-task'>${name}</h3>
        <span class='date-span'>${date}</span>`
    document.querySelector('.tasks-container').appendChild(taskDOM)

    UI.initTask(taskDOM)

    if (name === 'New Task' && !pageLoad) {
      const projName = document.querySelector('.title').innerHTML
      Storage.addTask(new TODO('New Task'), projName) // Modules

      UI.nameTask(taskDOM)
    }
  }

  static nameTask(taskDOM) {
    const textbox = taskDOM.children[1]

    if (!textbox.classList.contains('name-task')) {
      const inputField = document.createElement('input')
      inputField.type = 'text'
      inputField.classList.add('name-task')
      if (textbox.innerHTML !== 'New Task') {
        inputField.value = textbox.innerHTML
      }

      const oldName = textbox.innerHTML.trim() //
      const projName = document.querySelector('.title').innerHTML //

      textbox.parentNode.replaceChild(inputField, textbox)

      inputField.focus()

      inputField.addEventListener('input', () =>
        UI.checkTaskName(
          inputField,
          inputField.value.trim(),
          oldName,
          projName,
          false,
          false,
        ),
      ) //

      inputField.addEventListener('blur', () => {
        if (inputField.value === '') {
          inputField.value = 'New Task'
        }

        if (
          projName === 'Today' ||
          projName === 'Week' ||
          projName === 'Month'
        ) {
          Storage.renameTimeTask(
            textbox.innerHTML.trim(),
            inputField.value.trim(),
          )
        } else {
          Storage.renameTask(
            textbox.innerHTML.trim(),
            inputField.value.trim(),
            projName,
          ) // Modules
        }

        const name = textbox.innerHTML.trim() //

        textbox.innerHTML = inputField.value.trim()
        taskDOM.id = inputField.value.trim()

        taskDOM.replaceChild(textbox, inputField)

        UI.checkTaskName(
          textbox,
          inputField.value.trim(),
          name,
          projName,
          true,
          inputField.classList.contains('input-error'),
        ) //
      })
    }
  }

  static checkTaskName(inputField, name, oldName, projName, isBlur, okDel) {
    const list = Storage.getTodoList()
    let isSame = false

    list.getProjects().forEach((proj) => {
      if (proj.getName() === projName) {
        proj.getTasks().forEach((task) => {
          if (isBlur) {
            if (okDel && task.getName() === name) {
              inputField.classList.add('input-error')
              UI.checkTask(inputField.parentNode, true) // fixme
              okDel = false
            }
          } else if (task.getName() === name && name !== oldName) {
            isSame = true
            inputField.classList.add('input-error')
          } else if (!isSame) {
            inputField.classList.remove('input-error')
            isSame = false
          }
        })
      }
    })
  }

  static initTask(task) {
    task.children[1].addEventListener('click', () => UI.nameTask(task))
    task.firstElementChild.addEventListener('click', () =>
      UI.checkTask(task, false),
    )
    task.lastElementChild.addEventListener('click', () => UI.dateTask(task))
  }

  static dateTask(taskDOM) {
    const dateSpan = taskDOM.lastElementChild

    const inputField = document.createElement('input')
    inputField.type = 'date'
    inputField.classList.add('date-task')
    if (dateSpan.innerHTML !== 'No Date') {
      inputField.value = dateSpan.innerHTML
    }

    dateSpan.parentNode.replaceChild(inputField, dateSpan)

    inputField.focus()

    inputField.addEventListener('blur', () => {
      let formattedDate
      if (inputField.value === '') {
        formattedDate = 'No Date'
      } else {
        // Formatting Date
        const unformattedDate = inputField.value
        formattedDate = `${unformattedDate.split('-')[2]}-${
          unformattedDate.split('-')[1]
        }-${unformattedDate.split('-')[0]}`
      }
      const projName = document.querySelector('.title').innerHTML
      const taskName = inputField.parentNode.children[1].innerHTML

      Storage.dateTask(formattedDate, taskName, projName) // Modules

      dateSpan.innerHTML = formattedDate
      taskDOM.id = formattedDate

      taskDOM.replaceChild(dateSpan, inputField)
    })
  }

  static checkTask(task, sameName = false) {
    const name = task.id

    const checked = document.createElement('div')
    checked.classList.add('checked')
    checked.classList.add('check-box')
    checked.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,17H7V7H17V17Z' /></svg>`

    task.firstElementChild.replaceChild(
      checked,
      task.firstElementChild.firstElementChild,
    )

    task.children[1].style.textDecoration = 'line-through'

    setTimeout(() => {
      task.remove()
    }, 250)

    const projName = document.querySelector('.title').innerHTML

    if (projName === 'Today' || projName === 'Week' || projName === 'Month') {
      Storage.deleteTimeTask(name, sameName)
    } else {
      Storage.deleteTask(name, projName, sameName)
    }
  }
}
