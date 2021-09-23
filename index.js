const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([

    // title of the project

    {

        name: "title",
        message: "Enter title of the project."

    },

    // sections

    // Description

    {
        name: "description",
        message:"Enter description of the project."

    },

    // Installation

    {
        name: "installation instructions",
        message: "Provide instructions on how to install (if applicable)."

    },


    // Usage Information

    {
        name: "usage information",
        message: "Enter usage information for your project."
    },

    // Contribution

    {
        name: "contributors",
        message: "Inform how other developers can contribute to your project, what the guidelines are, limitations, any rules, etc."


    },

    // Tests

    {
        name: "tests",
        message: "Provide information on how to run the project"

    },


    // license Information

    {
        type: "list",
        message: "Pick the license number you are using for your project:",
        name:"license",
        choices: ["ISC", "MIT" , "Apache License 2.0", "The Unlicense", "Mozilla Public License 2.0"]
    },


    // Questions : Github username added with a link to GitHub profile, 

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
        default: bkhanal87,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
   },


    // Questions: Email address added with instruction on how to reach me with additional questions, 

    {
        type: "input",
        message: "What is your email address if I need to reach you with additional questions?",
        name: "email",
        default: bkhanal87,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }

    },



    // Table of Contents: Taken to the corresponding section of the README







])