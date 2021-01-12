// function to generate markdown for README
function generateMarkdown(answers) {

  let licenseURL = ""
  if (answers.license === "MIT") {
    licenseURL = "[![License](https://img.shield.io/badge/License-MIT-green)]"
  } else if (answers.license === "GPL 3.0") {
    licenseURL = "[![License](https://img.shields.io/badge/License-GPL%203.0-green)]"
  } else if (answers.license === "APACHE 2.0") {
    licenseURL = "[![License](https://img.shields.io/badge/License-APACHE%202.0-green)]"
  } else if (answers.license === "ISC") {
    licenseURL = "[![License](https://img.shields.io/badge/License-ISC-green)]"
  } else if (answers.license === "Unlicensed") {
    licenseURL = "[![License](https://img.shields.io/badge/License-Unlicensed-green)]"
  };

  return `# ${answers.title}

  ## Description ${answers.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [License](#license)
  * [Questions and Contact](#questions-and-contact)

  ## Installation
  To install application and its dependencies use the following command:

  \`$ ${answers.installation} \`

  ## Usage
  To run application use the following command:

  \`$ ${answers.usage}\`

  ## Contributors

  \`$ ${answers.contributors} \`

  ## Testing

  \`$ ${answers.testInstructions} \` 

  ## License
  ${licenseURL}

  ## Questions and Contact
  You can reach out with questions and contributions at <br/>
  ${answers.email} <br/>
  ${answers.LinkedIn} <br/>
  and see more of my work at 
  ${answers.GitHub} <br/>
  ${answers.website} <br/>

  ${answers.author} 
`;
}

module.exports = generateMarkdown;
