const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Array of employee objects
const employees = [];

//Finds general info, and then passes the object into more specific info grabbing functions
const inquirerEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is this employee\'s role?',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'Name:',
            name: 'name'
        },
        {
            type: 'input',
            message: 'ID:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email'
        }
    ]).then((res) => {
        res.name = res.name.charAt(0).toUpperCase() + res.name.substr(1);
        //Find role specific information
        if(res.role === 'Manager') {
            getOfficeNumber(res);
        } else if (res.role === "Engineer") {
            getGitHub(res);
        } else if(res.role === "Intern") {
            getSchool(res);
        }
    });
}

//Asks for the manager's office number
const getOfficeNumber = (manager) => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Office Number:',
            name: 'officeNum'
        }
    ]).then(res => {
        //Set property and check for another employee
        manager.officeNum = res.officeNum;
        checkForOther(manager);
    })
}

//Asks for the engineer's github username
const getGitHub = (engineer) => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'GitHub Username:',
            name: 'gitHubUser'
        }
    ]).then(res => {
        //Set property and check for another employee
        engineer.gitHubUser = res.gitHubUser;
        checkForOther(engineer);
    })
}

//Get intern's school
const getSchool = (intern) => {
    inquirer.prompt([ 
        {
            type: 'input',
            message: 'School:',
            name: 'school'
        }
    ]).then(res => {
        //Set property and check for another employee
        intern.school = res.school;
        checkForOther(intern);
    })
}

//Checks if the user has any other employees to add
const checkForOther = (employee) => {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Do you have another employee?',
            name: 'anotherEmployee'
        }
    ]).then(res => {
        //Push new objects to the employees arrays depending on role
        if(employee.role === "Manager") {
            employees.push(new Manager(employee.name, employee.id, employee.email, employee.officeNum));
        } else if(employee.role === "Engineer") {
            employees.push(new Engineer(employee.name, employee.id, employee.email, employee.gitHubUser));
        } else if(employee.role === "Intern") {
            employees.push(new Intern(employee.name, employee.id, employee.email, employee.gitHubUser));
        }
        //If there's another employee, run the whole thing again otherwise run the render function and then write it to a different file.
        if(res.anotherEmployee) {
            inquirerEmployee();
        } else {
            let renderedHTML = render(employees);
            fs.writeFile(outputPath, renderedHTML, 'utf8', err => {
                if(err) {
                    return err;
                } else {
                    console.log("Write file success");
                }
            })
        }
    })
}

//Begin app
inquirerEmployee();