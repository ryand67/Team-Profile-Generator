//ENGINEER CLASS
//Extends Employee so it imports
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.github = gitHub;
    }

    //Returns gitHub username
    getGithub() {
        return this.github;
    }

    //Returns employee's role
    getRole() {
        return "Engineer";
    }
}

//Exports class
module.exports = Engineer;