# fetchData Function Documentation

The `fetchData` function is an asynchronous utility function used to fetch data from a specified API endpoint. This function takes a user ID as its first argument and an optional second argument, `el`, to specify the type of data to fetch. If the `el` parameter is not provided, the function fetches the user's main data.

## Usage

```javascript
import fetchData from './util/fetchData';

(async () => {
  const rawData = await fetchData(12, 'activity');
  console.log(rawData);
})();
```

## Function Signature

```javascript
async function fetchData(id: number, el?: string): Promise<any>
```

### Parameters
``id`` (number) - The user ID for which the data is being fetched.
``el`` (string) [optional] - The type of data to fetch. Possible values include "activity", "average-sessions", and "performance". If not provided, the user's main data will be fetched.

### Returns
``Promise<any>`` - A promise that resolves to the fetched data as a JSON object.

Example

```js
import fetchData from './util/fetchData';

(async () => {
  const userData = await fetchData(12);
  const activityData = await fetchData(12, 'activity');
  const averageSessionData = await fetchData(12, 'average-sessions');
  const performanceData = await fetchData(12, 'performance');

  console.log(userData, activityData, averageSessionData, performanceData);
})();
```

By using the ``fetchData`` function, you can efficiently fetch data for different components in your application.