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
        type: "input",
        name: "email",
        message: "Enter your email if you'd like to be reached by email.",
        default: "N/A",
    },
    {
        type: "input",
        name: "GitHub",
        message: "Enter your GitHub username if you'd like to share your work.",
        default: "N/A",
    },
    {
        type: "input",
        name: "LinkedIn",
        message: "Share a link to your LinkedIn profile if you'd like.",
        default: "N/A",
    },
    {
        type: "input",
        name: "website",
        message: "Share a link to your professional website.",
        default: "N/A"
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
        message: "What command(s) should be used to test your application?",
        when: function(answers){
            return answers.tests;
        }
    },
    {
        type: "list",
        name: "license",
        message: "What type of license would you like to use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "ISC", "Unlicensed"]
    },
    
];

// function to initialize program
async function init() {
    console.log("Welcome to the README generator! Get ready to answer some questions.")
    const answers = await inquirer.prompt(questions);
    const readmeText = await generateMarkdown(answers);
    await writeToFile ("README.md", readmeText, (error) => {
        if (error){
            console.log(error)
        }
        else {
            console.log("Congratulations! Your README has been generated.")
        }}
    )
}

// function call to initialize program
init();
