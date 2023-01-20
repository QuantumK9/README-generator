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
    // console.log(data);
    const markdown = generateMarkdown(data);
    writeToFile("README.md", markdown);
  });
}

// function call to initialize program
init();
