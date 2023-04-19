# DataModel Class Documentation
The ``DataModel`` class is a utility class designed to format and structure raw data fetched from an API or retrieved from mock data sources. It provides methods to format data related to user main information, activity, average sessions, and performance.

## Usage
To use the ``DataModel`` class, import it and create a new instance with the raw data as an argument:
```jsx
import DataModel from './DataModel';

// Fetch or retrieve raw data
const rawData = // raw data fetched from an API or mock data;

// Create a new DataModel instance
const dataModel = new DataModel(rawData);

// Use the appropriate method to format the data
const formattedData = dataModel.formatUserMainData(); // or any other formatting method
```

## Methods
The ``DataModel`` class provides the following methods to format different types of data:

### formatUserMainData()
This method formats the raw data related to the user's main information. It returns an object containing the user's ID, first name, last name, age, today's score, and key nutritional data.
```jsx
const formattedData = dataModel.formatUserMainData();
```

### formatActivityData()
This method formats the raw data related to the user's activity. It returns an object containing the user's ID and an array of session objects with day, kilogram, and calories properties.

```jsx
const formattedData = dataModel.formatActivityData();
```

### formatAverageSessionsData()
This method formats the raw data related to the user's average session length. It returns an object containing the user's ID and an array of session objects with day and sessionLength properties.
```jsx
const formattedData = dataModel.formatAverageSessionsData();
```

### formatPerformanceData()
This method formats the raw data related to the user's performance. It returns an object containing the user's ID, kind (type of performance data), and an array of data objects with value and kind properties.
```jsx
const formattedData = dataModel.formatPerformanceData();
```

## Customization
To add more formatting methods or modify the existing ones, add or modify the methods in the ``DataModel`` class. Ensure that the returned data structure is compatible with the components expecting the data.

