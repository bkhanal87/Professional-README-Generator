const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([

    // title of the project

    {
        name: "title",
        message: "title of the project"

    },

    // sections

    // Description

    {
        name: "description",
        message:"enter description of the project"

    },

    // Installation

    {
        name: "installation instructions",
        message: "provide instructions on how to install (if any)"

    },


    // Usage Information

    {
        name: "usage information",
        message: "Enter usage information (if any)"
    },

    // Contribution

    {
        name: "contributors",
        message: "Enter contributor information (if any)"


    },

    // Tests

    {
        name: "tests",
        message: "Provide tests information (if any)"

    },


    // license Information

    // Questions : Github username added with a link to GitHub profile, 
    // Questions: Email address added with instruction on how to reach me with additional questions, 

    // Table of Contents: Taken to the corresponding section of the README



])