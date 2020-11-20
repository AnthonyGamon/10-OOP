const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


inquirer.prompt([
    {
        type: "input",
        message: "What is your manager’s name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is your Managers Id?",
        name: "managerId",
    },
    {
        type: "input",
        message: "What is your managers email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is your managers office number?",
        name: "managerOffice",
    },
    {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "addMember",
        choices: ["Engineer","Intern", "I don’t want to add any more team members"]
    },

])
//Start to engineer
.then((answers) => {
    if (answers.addMember === "Engineer") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your engineers name?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "What is your engineers Id?",
                name: "engineerId",
            },
            {
                type: "input",
                message: "What is your engineers email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is your engineers GitHub?",
                name: "engineerGithub"
            },

        ]).then((answers) => {
            const engineer = new Engineer (answers);

            writeFileAsync("./engineer.html");
        })
    }
    //ending of engineer
    //Start to intern
    if (answers.addMember === "Intern") {
        inquirer.prompt([
            {
                type: "input",
                message: "What is your intern’s name?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is your intern’s Id?",
                name: "internId",
            },
            {
                type: "input",
                message: "What is your intern’s email?",
                name: "internEmail",
            },
            {
                type: "input",
                message: "What is your intern’s school?",
                name: "internSchool",
            },
        ])
        .then((answers) => {
            const intern = new Intern (answers);

            writeFileAsync("./intern.html");
        })
    }
    //ending of intern
    if (answers.addMember === "I don’t want to add any more team members") {
        promptUser()
        .then(() => console.log('Thank you for your submission'))
        .catch((err) => console.error(err));
    }
})
