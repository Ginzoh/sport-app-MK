# StatsDisplay Component Documentation
The ``StatsDisplay`` component is used to display key data related to the user's daily nutrition intake. This includes calorie count, protein count, carbohydrate count, and lipid count.

## Usage
To use the ``StatsDisplay`` component, import it and include it in your React component with the keyData prop:

```jsx
import StatsDisplay from './StatsDisplay';

function App() {
  // ... load key data from the API or mock data
  return (
    <div>
      <StatsDisplay keyData={keyData} />
      {/* Rest of your components */}
    </div>
  );
}

export default App;
```
## Props
The ``StatsDisplay`` component accepts the following prop:

* keyData: An object containing key nutritional information for the user, including calorie count, protein count, carbohydrate count, and lipid count. The ``keyData`` object should have the following structure:

```jsx
{
  calorieCount: PropTypes.number,
  proteinCount: PropTypes.number,
  carbohydrateCount: PropTypes.number,
  lipidCount: PropTypes.number,
}
```

## Customization
To customize the appearance of the ``StatsDisplay`` component, modify the ``StatsDisplay.css`` file. If you need to change the images or text associated with the nutritional information, update the import statements for the images and the text within the ``<span>`` elements inside the StatsDisplay component.

## Example Data
Here is an example of the data format that the StatsDisplay component expects:

```jsx
{
  calorieCount: 1930,
  proteinCount: 155,
  carbohydrateCount: 290,
  lipidCount: 50,
}
```

In this example, the user has consumed 1930 calories, 155 grams of protein, 290 grams of carbohydrates, and 50 grams of lipids.