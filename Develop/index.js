// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe the installation process.",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of your project."
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe the contributing process."
    },
    {
        type: "input",
        name: "tests",
        message: "Please describe the tests for your project.",
        default: "node index.js"
    },
    {
        type: "input",
        name: "github",
        message: "Please type your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please type your email."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        }
    });

    console.log("Successfully wrote to " + fileName);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        const readme = generateMarkdown(data);
        writeToFile("README.md", readme);
    }
    );
}



// Function call to initialize app
init();
