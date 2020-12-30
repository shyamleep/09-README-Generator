const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
    {
        type: "input",
        name: "author",
        message: "What is your name?"
    },   
    {
        type: "checkbox",
        name: "contact",
        message: "How should people reach out to you?",
        choices: ["email", "LinkedIn", "GitHub", "website", "N/A"]
    },
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
        message: "What command should be used to run your application?"
    },

    {
        type: "confirm",
        name: "credit",
        message: "Would you like to share credit or tip your hat to any contributors?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Whom would you like to acknowledge?",
        when: function(answers){
            return answers.credit;
        }
    },
    {
        type: "confirm",
        name: "tests",
        message: "Are there any tests for this application?"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What command(s) should be used to test your application?"
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
