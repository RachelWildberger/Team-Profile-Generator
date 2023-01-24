const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];
const addToTeam = [];


const questions = () => {
    
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "teamMember",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Manager",
                    "Employee",
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"]
            },
        ])
            .then((response) => {
                switch (response.teamMember) {
                    case "Manager":
                        addManager();
                        break;
                    case "Non-manager":
                        addNonManager();
                        break;
                    default:
                        buildTeam();
                }
            });
    }

    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                // validate: (answer) => {
                //     if (answer !== "") {
                //         return true;
                //     }
                //         return "You have to add a name for your team manager.";
                // }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
            },
            {
                type: "input",
                name: "managerOffNum",
                message: "What is the manager's office number?",
            },
        ])
            .then((response) => {
                const manager = new Manager(
                    response.managerName, 
                    response.managerId, 
                    response.managerEmail, 
                    response.managerOffNum
                    );
                teamMembers.push(manager);
                addToTeam.push(response.managerId);
                createTeam()
            });
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
            }, 
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
            }, 
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
            },     
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the engineer's GitHub?",
            },       
        ])
    }
}

    // const addToTeam = () => {


questions();