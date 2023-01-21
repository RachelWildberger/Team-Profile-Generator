const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');

const questions = [

    {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
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
    {
        type: "input",
        name: "teamMember",
        message: "Which type of team member would you like to add?",
        choices: [
            "Employee",
            "Engineer",
            "Intern",
            "None"]
    },
];

// let writeToFile = (fileName, data) => {
//     fs.writeFile(fileName, data, function(err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log('Success!');
//     });
// };

// let init = () => {
//     inquirer.prompt(questions)
//         .then(answers => {
//                 const createHtml = new Manager(answers);
//                 writeToFile('team.html', createHtml)
//         });

// }; 

// init();