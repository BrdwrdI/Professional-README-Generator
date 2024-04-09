// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0 License'){
    return '![License](https://img.shields.io/badge/Lincense-Apache_2.0-blue.svg';
  } else if (license === 'GNU GPL v2'){
    return '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'AGPL v3')
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

Github Username: ${data.github}

Github Link: ${data.githubLink}

## License

${data.license}

## How to Contribute

${data.contributions}

## Tests

${data.test}

`;
}

module.exports = generateMarkdown;
