// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== "None") {
    return `![badge](https://img.shields.io/badge/License-${License}-blueviolet.svg)`;
  } else {
    return "";
  }
}
// Creates the language icons based on the user's input
function renderLanguageIcon(Languages) {
    if (Languages !== "None") {
      return `![My Skills](https://skillicons.dev/icons?i=${Languages}&theme=dark)`;
    } else {
      return "";
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== "None") {
    return `[${License}](https://choosealicense.com/licenses/${License})`;
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
    if (License !== "None") {
        return ` ## [License](#table-of-contents)\nLearn more about my ${renderLicenseLink(License)} license. `;
}   else {
    return "";
}
}
// Generates a response based on the yes or no answer from the contribution section. 
function addContributors (Contributing){
    if (Contributing == "Yes"){
        return `I am currently accepting contributions to this project. Please email me for info about contributing.`
    } else {
        return "I am currently not accepting contributions to this project."
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)} 
  ${renderLanguageIcon(data.Languages)}
  
   
  
  
  ## Table-of-contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
${renderLicenseSection(data.License)}
### [Description](#table-of-contents)
${data.Description}
### [Installation](#table-of-contents)
${data.Installation}
### [Usage](#table-of-contents)
${data.Usage}
### [Contributing](#table-of-contents)
${addContributors(data.Contributing)}
### [Tests](#table-of-contents)
${data.Tests}
#### [Questions?](#table-of-contents)
Please contact me using the following links.
\nFollow me here at my [Github](https://github.com/${data.Github}) 
\nEmail: ${data.Email}
`;
}

module.exports = generateMarkdown;