const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['Apache 2.0 License', 'MIT', 'GNU GPL v2', 'AGPL v3', 'Mozilla Public License 2.0', ''];

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you give a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How would you prefer others to help contribute to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What do you use to test this project?'
    },
    {
        type: 'list',
        name: 'licenseOptions',
        message: 'Which License are you using?',
        choices: licenses
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.'
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Please enter a link to your github.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => (
        err ? console.error(err) : console.log('README.md has been successfully created!')
    ));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((data) => writeToFile('README.me', generateMarkdown(data)));
};

// Function call to initialize app
init();
