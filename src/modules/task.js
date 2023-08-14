export default class Task {

    constructor(name) {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }
    
    getDate() {
        return this.dueDate;
    }

}