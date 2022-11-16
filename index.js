// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input

// questions array created with different types of input. (input, checkbox, list, confirm) 
// validation added to make sure that the user responds. 
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the name of your project?",
    validate: (titleCheck) => {
      if (titleCheck) {
        return true;
      } else {
        console.log("Please add a title");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "Description",
    message: "Please add a description of your project",
    validate: (descCheck) => {
      if (descCheck) {
        return true;
      } else {
        console.log("Please add a description");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "Installation",
    message: "What are the installation instructions?",
    validate: (installCheck) => {
      if (installCheck) {
        return true;
      } else {
        console.log("Please add a installation instructions.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "How do you use this application?",
    validate: (usageCheck) => {
      if (usageCheck) {
        return true;
      } else {
        console.log("Please add information about usage.");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "Contributing",
    message: "Are you accepting contributors?",
    default: true,
    validate: (contCheck) => {
      if (contCheck) {
        return true;
      } else {
        console.log("Please select yes or no.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Tests",
    message: "What are the testing instructions?",
    validate: (testCheck) => {
      if (testCheck) {
        return true;
      } else {
        console.log("Please add testing instructions");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "License",
    message:
      "Which license are you using for this project?(Use up and down arrow keys to select.)",
    choices: ["apache-2.0", "mit", "gpl-3.0", "None"],
  },
  {
    type: "checkbox",
    name: "Languages",
    message: "What languages or frameworks did you use in this project?",
    choices: ["html", "css", "js", "jquery", "nodejs", "bootstrap","tailwind"],
   },
  {
    type: "input",
    name: "Github",
    message: "What is your github username?",
    validate: (githubCheck) => {
      if (githubCheck) {
        return true;
      } else {
        console.log("Please add your github username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email?",
    validate: (emailCheck) => {
      if (emailCheck) {
        return true;
      } else {
        console.log("Please add your email.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
/* uses the "fs" package to take data collected from the "questions" 
array to create the readme file*/

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success");
  });
}

// TODO: Create a function to initialize app
// stores the generated readme file in the dist folder
function init() {
  return inquirer.prompt(questions).then((readMeInfo) => {
    writeToFile("./dist/readme.md", generateMarkdown(readMeInfo));
  });
}

// Function call to initialize app
init();