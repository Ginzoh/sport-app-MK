# CustomBarChart Component Documentation

The `CustomBarChart` component is a custom bar chart built using the `recharts` library. It is designed to display data as a vertical bar chart, with custom styling and features, such as a gradient fill for the bars, a custom tooltip, and rounded corners.

## Table of Contents

1. [Usage](#usage)
2. [Props](#props)
3. [Features](#features)

## Usage

To use the `CustomBarChart` component, import it and pass the required `data` prop as an array of objects with `day` and `sessionLength` properties:

```jsx
import CustomBarChart from './graph/CustomBarChart';

function App() {
  return (
    <div>
      <CustomBarChart data={data} />
    </div>
  );
}
```

Replace the data array with your data, making sure each object in the array has a ``day``, a ``kilograms`` and a ``calories`` property. The chart will display the data accordingly.

## Props
The CustomBarChart component accepts the following props:

### __``data``__ (required)
An array of objects representing the data points for the bar chart. Each object must have the following properties:

* ``__day__`` (string): The day of the week as a string.
* kilogram (number): The weight of that day in kilograms.
* calories (number): The calories lost on that day in kcal.

## __Features__
### __Custom Tooltip__
When hovering over a bar, a custom tooltip appears displaying the weight and calories lost on that day.

### __Rounded Corners__
The bars in the chart have rounded corners to provide a visually appealing appearance.