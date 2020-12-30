const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose of this project in one or two sentences."
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be used to install your application?",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: ""
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
