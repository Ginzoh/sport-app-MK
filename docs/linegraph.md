# CustomLineChart Component Documentation

It is designed to display data as a line chart, with custom styling and features, such as a gradient line, a custom tooltip, and a custom dot.

## Table of Contents

1. [Usage](#usage)
2. [Props](#props)
3. [Features](#features)

## Usage

To use the ``CustomLineChart`` component, import it and pass the required ``data`` prop as an array of objects with ``day`` and ``sessionLength`` properties:

```jsx
import CustomLineChart from './graph/CustomLineChart';

const data = [
  { day: 1, sessionLength: 20 },
  { day: 2, sessionLength: 30 },
  // ...
];

function App() {
  return (
    <div>
      <CustomLineChart data={data} />
    </div>
  );
}
```

## __Props__

The CustomLineChart component accepts the following props:

### __``data``(required)__ 
An array of objects representing the data points for the line chart. Each object must have the following properties:

* __``day``__ (number): The day of the week as a number (1-7), where 1 represents Monday and 7 represents Sunday.
* __``sessionLength``__ (number): The length of the session in minutes.

## __Features__

### __Gradient Line__
The line chart features a gradient line that starts with a lower opacity on the left side and gradually increases in opacity towards the right side.

### __Custom Tooltip__
When hovering over a data point, a custom tooltip appears displaying the session length in minutes.

### __Custom Dot__
The CustomDot component is used to customize the appearance of the data points in the line chart. When a data point is active (hovered), the custom dot's appearance changes. The CustomLineChart component also provides the ability to highlight a reference area for the active data point.