//INTERN CLASS
//Extends Employee class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //Returns user's school
    getSchool() {
        return this.school;
    }

    //Returns employee's role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;