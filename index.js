const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");

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
        new inquirer.Separator(),
        "apache2", "bsd2", "bsd3",
        new inquirer.Separator(),
        "cc1", "cc4-international", "cc4-sharealike",
        new inquirer.Separator(),
        "MIT", "Unlicense"
      ],
      type: "list"
    },

    // {
    //   name: "license",
    //   choices: [
    //     "ISC",
    //     "MIT",
    //     "Apache License 2.0",
    //     "The Unlicense",
    //     "Mozilla Public License 2.0",
    //   ],
    //   type: "list",
    // },

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

    let questionContent = (gitHubuserName || userEmail) && (gitHubuserName.length + userEmail.length);

    let text = `${userTitle&&userTitle.length?title + "\n===\n":""}

${license&&license.length?licenser.getBadge(license)+ "\n":""}
${userDescription&&userDescription.length?"Description\n---\n"+userDescription:""}





// Table of Contents: Taken to the corresponding section of the README

${installation&&installation.length?"Installation\n---\n"+installation:""}

${usage&&usage.length?"Usage\n---\n"+usage:""}

${license&&license.length?"License\n---\n"+licenser.getText(license):""}

${contributing&&contributing.length?"Contributing\n---\n"+contributing:""}

${tests&tests.length?"Tests\n--\n"+tests:""}

${ questionContent?"Questions\n---\n":""}

${ gitHubUserName&&gitHubuserName.length?"-What is your gitHub username?\n\t- It is:"+gitHubuserName+"\n":"" }
${ userEmail&userEmail.length?"\n- How can we reach you with additional questions?\n\t- You can reach me with additional questions at <a href='mailto:"+userEmail+"</a>.\n":""}`;

text = text.replace(/\n\n\n/gm, "\n");

text = addTableOfCotents(text, userDescription, installation, usage, license, contributing, tests, questionContent);

const fileName = "Professional-README.md";
fs.writeFileSync(fileName, text);

console.group("README Generator");
console.log(`written to ${fileName}:\n${text}`);
console.groupEnd();

  }).catch(err => {
      console.log("Error: ", err);
  });

function addTableOfCotents(text, userDescription, installation, usage, license, contributing, tests, questionContent){
      let toc = "";

      if (userDescription && userDescription.length)
        toc += "- [Description] (#description)\n";
      if ( installation&& installation.length)
        toc += "- [Installation] (#installation)\n";
      if (usage && usage.length)
        toc += "- [Usage] (#usage)\n";
      if (license && license.length)
        toc += "- [License] (#license)\n";
      if (contributing && contributing.length)
        toc += "- [Contributing] (#contributing)\n";
      if (tests && tests.length)
        toc += "- [Tests] (#tests)\n";
      if (questionContent && questionContent.length)
        toc += "- [Questions] (#questions)\n";

      if (toc.length) toc = "Table of Contents\n---\n" + toc;
      text = text.replace(/__TOC__/, toc);

      return text;
}

let licenser = {
  getText: (license) => {
    switch (license) {
      case "apache2":
        return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "bsd2":
        return "[BSD2](https://opensource.org/licenses/BSD-2-Clause)";
        break;
      case "bsd3":
        return "[BSD3](https://opensource.org/licenses/BSD-3-Clause)";
        break;


      case "cc1":
        return "[CC 1.0 License](http://creativecommons.org/publicdomain/zero/1.0/)";
        break;
      case "cc4-international":
        return "[CC 4.0 International](https://creativecommons.org/licenses/by/4.0/)";
        break;
      case "cc4-sharealike":
        return "[CC 4.0 Share Alike](https://creativecommons.org/licenses/by-sa/4.0/)";
        break;

      case "MIT": 
        return "[MIT License](https://opensource.org/license/MIT)";
        break;
      case "Unlicense":
        return "[Unlicense](http://unlicense.org/)";
        break

      default:
        return "error-license-link-not-found";
      
    }
  },
  getBadge: (license) => {
    switch (license) {
      case "apache2":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "bsd2":
        return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        break;
      case "bsd3":
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;


      case "cc1":
        return "[![License: CCO-1.0](https://img.shields.io/badge/License-CCO%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
        break;
      case "cc4-international":
        return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
        break;
      case "cc4-sharealike":
        return "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
        break;

      case "MIT": 
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)";
        break;
      case "Unlicense":
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break

      default:
        return "error-license-link-not-found";
      
    }
  },
}















  



