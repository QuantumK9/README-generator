// function to generate markdown for README
const badges = {
  mit: {
    name: "MIT License",
    link: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  apache: {
    name: "Apache 2.0 License",
    link: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },

  gpl: {
    name: "GNU GPL v3",
    link: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },

  bsd: {
    name: "BSD 3-Clause License",
    link: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
};

function checkLicense(licenseChosen) {
  switch (licenseChosen) {
    case "MIT":
      badgeName = badges.mit.name;
      badgeLink = badges.mit.link;
      break;
    case "Apache":
      badgeName = badges.apache.name;
      badgeLink = badges.apache.link;
      break;
    case "BSD":
      badgeName = badges.bsd.name;
      badgeLink = badges.bsd.link;
      break;
    case "GPL":
      badgeName = badges.gpl.name;
      badgeLink = badges.gpl.link;
      break;

    default:
      badgeName = badges.mit.name;
      badgeLink = badges.mit.link;
      break;
  }
}

function generateMarkdown({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  github,
  credits,
}) {
  checkLicense(license);

  return `
# ${title}

## Description
${description}


## Table of contents
* [Installation ](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)
* [License](#license)


## Installation 

Run the script below to install the app.
\`\`\`
  ${installation}
\`\`\`



## Usage

Open terminal and run the following to run the app.
\`\`\`
  ${usage}
\`\`\`



## Screenshots



## Contributing

If you want to contribute : 

${contributing}

## Tests

Run the following script for testing:
\`\`\`
  ${tests}
\`\`\`

## Questions

For any questions or requests : [${github}](https://${github}).

## Credits

${credits}


## License 

${badgeName}\n
${badgeLink}
  
`;
}

module.exports = generateMarkdown;
