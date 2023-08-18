export default class TODO {
  constructor(name, date = 'No Date') {
    this.name = name
    this.date = date
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setDate(date) {
    this.date = date
  }

  getDate() {
    return this.date
  }
}
