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

function generateMarkdown({ title, description }) {
  return `
# ${title}

## ${description}

This is a Javascript challenge where a weather forecast app dashboard is created. The user is able to search any city they like and the page returns weather information for that city, for the current day and a forecast for the next 5 days.

To create this dashboard, an external weather forecast API was used, AJAX calls were made using API keys and dynamic URLs based on user's input. The response was filtered, sorted and displayed in a user friendly way, with the right units and user's history was stored on local storage in their browser, so they can go through it later if needed. The search history was also dynamically displayed with buttons, which can be used to get weather forecast once more without enter the city again. 


### Note:

The 5-day forecast API used, returned 5 days weather data, ***including the current day***. So although there should be a current day weather display and 5 more days forecast, in this project we only display current day and forecast of current day (later time) and 4 more days. 
## Installation (optional)

If someone wants to, they can download the code from the following repository: 
[Weather Forecast Dashboard Repository](https://github.com/QuantumK9/weather-dashboard)


## Usage

The final project can me seen in the following link:

[Quantum K - Weather Forecast Dashboard](https://quantumk9.github.io/weather-dashboard/)




## Screenshots
Desktop:
![Desktop - Screenshot](./assets/images/desktop.jpg)

Mobile/tablet:
![Mobile/Tablet - Screenshot](./assets/images/mobile-tablet.jpg)


## Credits

This challenge was completed by Quantum K (GitHub)


## License 

${badges.mit.name}
${badges.mit.link}
  
`;
}

module.exports = generateMarkdown;
