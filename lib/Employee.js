// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    //Returns user's name
    getName() {
        return this.name;
    }

    //Returns user's id
    getID() {
        return this.id;
    }

    //Returns user's email
    getEmail() {
        return this.email;
    }

    //Returns user's role
    getRole() {
        return this.role;
    }
}

module.exports = Employee;