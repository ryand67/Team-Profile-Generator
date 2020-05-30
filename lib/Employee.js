// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Returns user's name
    getName() {
        return this.name;
    }

    //Returns user's id
    getId() {
        return this.id;
    }

    //Returns user's email
    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

//Exports Employee class
module.exports = Employee;