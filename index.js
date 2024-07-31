// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'type',
    message: ('Enter a Title'),
    name: 'title',
},
{
    type: 'type',
    message: ('Please enter a description'),
    name: 'description',
},
{
    type: 'type',
    message: ('Describe the installation'),
    name: 'installation',
},
{
    type: 'type',
    message: ('What is the usage?'),
    name: 'usage'
},
{
    type: 'checkbox',
    message: ('Please select a license'),
    name: 'license',
    choices: ['GPL v3', 'MIT', 'Apache 2.0'],
},
{
    type: 'type',
    message: ('Who is contributing'),
    name: 'contributing',
},
{
    type: 'type',
    message: ('What tests have you ran or have installed?'),
    name: 'tests',
},
{
    type: 'type',
    message: ('For any questions, please contact me on [GitHub]'),
    name: 'github',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const doc = `# ${data.title}

## ${data.license} Lisence

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me on [GitHub]${data.github}`

    fs.writeFile(fileName, doc, err => {
        if (err) throw err;
        console.log('README.md file has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile("README.md", response)
        })

        .catch((error) => {
            console.error('An error occurred:', error.message);
        })
}

// Function call to initialize app
init();


