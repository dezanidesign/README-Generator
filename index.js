const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { table } = require("console");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


const firstPrompt = inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'Enter your username'
  },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is this project installed?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.'
    },
    {
      type: 'input',
      name: 'license',
      message: 'Provide licensing rights.'
    },
    {
      type: 'list',
      name: 'licenseList',
      message: 'Provide licensing rights.',
      choices: [ "Apache License 2.0", "GNU General Public License 3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public Lcense v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense" ]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Mention any contributers.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide tests for the application and how to run them.'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Mention any questions.'
    },
  
  
  
  
  
  
  
  ]).then(answers => {
        console.log(answers.title);
        const username = answers.username;
        profileLink = "github.com/" + username;
          const mainTitle = '### ' + answers.title;
          const mainDescription = '### Description' + ' \n \n ' + answers.description;
          const tableContents = '<details><summary>Table of Contents</summary><ol><li><a href="#Description">Description</a><ul><li><a href="#user-story">User Story</a></li></ul></li><li><a href="#usage">Usage</a></li><li><a href="#installation">Installation</a></li><li><a href="#usage">Usage</a></li><li><a href="#license">License</a></li><li><a href="#contributing">Contributing</a></li><li><a href="#tests">Tests</a></li><li><a href="#questions">Questions</a></li></ol></details>';
          const installation = '### Installation' + ' \n \n ' + answers.installation;
          const usage = '### Usage' + ' \n \n ' + answers.usage;
          const license = '### License' + ' \n \n ' + answers.license;
          const contributing = '### Contirbuting' + ' \n \n ' + answers.contributing;
          const tests = '### Tests' + ' \n \n ' + answers.tests;
          const questions  = '### questions' + ' \n \n ' + answers.questions;
          let choice = answers.licenseList;
          const choiceForBodyText = answers.licenseList;

          if (choice == "GNU General Public License 3.0"){
            choice = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
          };

          if (choice == "MIT License"){
            choice = 'BSD 3-Clause New or Revised License'
          };

          if (choice == "BSD 2-Clause Simplified License"){
            choice = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
          };

          if (choice == "Boost Software License 1.0"){
            choice = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
          };

          if (choice == "Creative Commons Zero v1.0 Universal"){
            choice = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
          };

          if (choice == "Eclipse Public License 2.0"){
            choice = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
          };

          if (choice == "GNU Affero General Public License v3.0"){
            choice = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
          };

          if (choice == "GNU General Public Lcense v2.0"){
            choice = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
          };

          if (choice == "GNU Lesser General Public License v2.1"){
            choice = 'N/A'
          };

          if (choice == "Mozilla Public License 2.0"){
            choice = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
          };

          if (choice == "The Unlicense"){
            choice = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
          };
          

          // const choice = answers.choices;
          

fs.writeFile('README.md', mainTitle + ' \n \n ' + choice + ' \n \n ' + mainDescription + ' \n \n' + tableContents + ' \n \n' + installation + ' \n \n' + usage + ' \n \n' + license + ' \n' + choiceForBodyText + ' \n \n' + contributing + ' \n \n' + tests + ' \n \n' + questions + ' \n' + username + '\n' + profileLink , (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
  
});

        });

      //   var secondPrompt = inquirer.prompt(
      //     ).then(answers => {
      //         console.log(answers.description);
      
          
              
      
              
      // const mainDescription = '# ' + answers.description;
      
      // fs.writeFile('README.md', mainDescription, (err) => {
      //   if (err) throw err;
      //   console.log('The file has been saved!');
      // });
      
      //         });