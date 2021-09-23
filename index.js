const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    // title of the project

    {
      name: "userTitle",
      message: "Enter title of the project.",
    },

    // sections

    // Description

    {
      name: "userDescription",
      message: "Enter description of the project.",
    },

    // Installation

    {
      name: "installation",
      message: "Provide instructions on how to install (if applicable).",
    },

    // Usage Information

    {
      name: "usage",
      message: "Enter usage information for your project.",
    },

    // Contribution

    {
      name: "contributing",
      message: "Inform how other developers can contribute to your project, what the guidelines are, limitations, any rules, etc.",
    },

    // Tests

    {
      name: "tests",
      message: "Provide information on how to run the project",
    },

    // license Information

    {
      name: "license",
      choices: [
        "ISC",
        "MIT",
        "Apache License 2.0",
        "The Unlicense",
        "Mozilla Public License 2.0",
      ],
      type: "list",
    },

    // Questions : Github username added with a link to GitHub profile,

    {
      name: "gitHubuserName",
      message: "Enter your gitHub username"
    
    },

    // Questions: Email address added with instruction on how to reach me with additional questions,

    {
      name: "userEmail",
      message: "Enter your email address with instruction on how to reach you with additional questions.",
    },

    // Table of Contents: Taken to the corresponding section of the README
  ]).then(answers => {

    let {
        userTitle,
        userDescription,
        installation,
        usage,
        license,
        contributing,
        tests,
        gitHubuserName,
        userEmail
    } = answers;

  });

