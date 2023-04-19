# Project Documentation

Welcome to the SportSee website project documentation. This project is built using React and showcases a Dashboard that provides an overview of a user's fitness data. The data used for this project is either mocked or fetched from a back-end API. In this documentation, you'll find information on the project structure, components used, and how to utilize the custom chart components. Use the links below to navigate to specific sections:

1 - [Graphs](graphs.md)
2 - [Navbar](navbar.md)
3 - [Stats Display](statsdisplay.md)
4 - [Data and Utilities](data_and_utilities.md)
5 - [General Layout and Styles](layout_and_styles.md)

## Introduction

The SportSee project is designed to display a user's fitness data on a comprehensive Dashboard. It uses either mocked data or retrieves data from a separate back-end API, depending on the configuration.

## Project Structure

```
src
├── assets
│   └── icons
├── component
├── data
├── graph
│   └── CustomDot
├── nav
└── util
```

* assets: Contains icons used in the Navbar and the StatsDisplay component.
* component: Contains the StatsDisplay component and its css, which displays calories, proteins, carbohydrates and lipids statistics.
* data: Contains the mocked data used in App.jsx with the .env variable.
* graph: Contains custom chart components, including CustomLineChart, CustomBarChart, CustomRadarChart, and CustomPieChart. The CustomDot component is located in a subfolder.
* nav: Contains the top and left navigation bars of the dashboard layout.
* util: Contains utility files, such as DataModel.jsx and fetchData.jsx.

Additionally, the project has two JSX files at the root: `main.jsx`, which sets up components in React.StrictMode, and `App.jsx`, which renders the main layout of the Dashboard and fetches data to pass to the custom chart components. The `index.css` file, also located at the root, contains general styling rules, such as the body layout and overall design. Most of the more complex css for the many components is stored at the root under `App.css`.


## Getting Started

# Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher (comes bundled with Node.js)

# Running the project

Follow these steps to set up and run the Vite React app on your local machine:

1. Clone the repository:

```git clone https://github.com/Ginzoh/sport-app-MK```

```cd sport-app-MK```

2. Install the dependencies:

```npm install```


3. Create a `.env` file in the root directory of the project and add the following line:

`VITE_REACT_APP_MOCK=FALSE`


Set the value to `TRUE` if you want to use mock data instead of the API.

4. Start the development server:

```npm run dev```

This command starts the Vite development server at `http://localhost:5173`. Open your browser and navigate to the URL to see the app running.
