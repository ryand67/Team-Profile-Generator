//MANAGER CLASS
//Extends Employee
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNumber = officeNum;
    }

    //Returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    //Returns employee's role
    getRole() {
        return "Manager";
    }
}

//Exports Manager class
module.exports = Manager;