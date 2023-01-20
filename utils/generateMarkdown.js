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

\`\`\`
  ${installation}
\`\`\`

If someone wants to, they can download the code from the following repository: 
[Weather Forecast Dashboard Repository](https://github.com/QuantumK9/weather-dashboard)


## Usage

\`\`\`
  ${usage}
\`\`\`



## Screenshots
Desktop:
![Desktop - Screenshot](./assets/images/desktop.jpg)

Mobile/tablet:
![Mobile/Tablet - Screenshot](./assets/images/mobile-tablet.jpg)

## Contributing

If you want to contribute : 

${contributing}

## Tests

\`\`\`
  ${tests}
\`\`\`

## Questions

For any questions or requests : ${github}

## Credits

${credits}


## License 

${badges.license.toLowerCase().name}
${badges.license.toLowerCase().link}
  
`;
}

module.exports = generateMarkdown;
