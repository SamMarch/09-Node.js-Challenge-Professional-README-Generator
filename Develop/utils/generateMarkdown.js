// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "APACHE":
      return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
      return "[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
      return "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `MIT License (MIT) - [MIT License](  https://opensource.org/licenses/MIT)
`; case "APACHE":
      return `Apache License 2.0 (APACHE) - [Apache License 2.0](  https://opensource.org/licenses/Apache-2.0)
`; case "GPL":
      return `GNU General Public License v3 (GPL) - [GNU General Public License v3](  https://www.gnu.org/licenses/gpl-3.0)
`; case "BSD":
      return `BSD 3-Clause License (BSD) - [BSD 3-Clause License](  https://opensource.org/licenses/BSD-3-Clause)
`; case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ${data.description} ${renderLicenseLink(data.license)}

  ## Table of Contents
  ${data.Table_of_Contents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
  
`;
}

module.exports = generateMarkdown;
