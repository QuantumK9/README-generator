const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter title of project:",
  },
  {
    type: "input",
    message: "Description: ",
    name: "description",
  },

  {
    type: "input",
    message: "Installation script: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage script: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Contributing: ",
    name: "contributing",
  },
  {
    type: "input",
    message: "Testing script: ",
    name: "tests",
  },
  {
    type: "input",
    message: "GitHub Profile URL: ",
    name: "github",
  },
  {
    type: "input",
    message: "Credits: ",
    name: "credits",
  },
  {
    type: "list",
    message: "License: ",
    name: "license",
    choices: ["MIT", "BSD", "Apache", "GPL"],
    default: "MIT",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    const markdown = generateMarkdown(data);
    // console.log(__dirname);
    let outputPath = path.join(__dirname, "output");
    writeToFile(`${outputPath}/README.md`, markdown);
  });
}

// function call to initialize program
init();
