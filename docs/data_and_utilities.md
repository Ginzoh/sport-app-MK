# Data and Utilities
This documentation page serves as an overview and middle way to access the individual documentation for the ``DataModel`` and ``fetchData`` utilities used in the project. These utilities are designed to fetch and format data from an API or mock data sources.

## DataModel
The ``DataModel`` class is a utility class that formats and structures raw data fetched from an API or retrieved from mock data sources. It provides methods to format data related to user main information, activity, average sessions, and performance.

For detailed information on the ``DataModel`` class, including usage and methods, [please refer to the ``DataModel`` Class Documentation.](datamodel.md)

## fetchData
The ``fetchData`` function is an asynchronous utility function responsible for fetching data from the API. It takes the user ID and an optional ``el`` parameter as its arguments. The ``el`` parameter specifies the type of data to fetch, such as activity, average sessions, or performance data. If the ``el`` parameter is not provided, the function fetches the user's main data.

For detailed information on the ``fetchData`` function, including usage, [please refer to the fetchData Function Documentation](fetchdata.md).

## Usage
These utilities are used together to fetch and format data for use in the application. First, use the ``fetchData`` function to fetch the raw data, then create a new ``DataModel`` instance with the fetched data and format it using the appropriate methods.

Example:

```jsx
import fetchData from './util/fetchData';
import DataModel from './util/DataModel';

(async () => {
  const rawData = await fetchData(12, 'activity');
  const dataModel = new DataModel(rawData);
  const formattedData = dataModel.formatActivityData();
})();

```

By using these utilities, the application can efficiently retrieve and manipulate data in the desired format for various components.