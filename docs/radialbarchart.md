# CustomRadialBarChart Component Documentation

The CustomRadialBarChart component is a custom pie chart built using the ``Recharts`` library. This component accepts a decimal number as a prop and displays a radial barchart with a custom label indicating the percentage of completion of the user's objective.

## Props

 Name | Type | Description | Required 
----------|----------|----------|----------
 score | Number | The score to be displayed as a percentage. | Yes |

## Usage

Here's an example of how to use the CustomPieChart component:
```jsx
import CustomPieChart from './graph/CustomPieChart';

const score = 0.12; // Change this to the desired score

function App() {
  return (
    <div>
      <CustomRadialBarChart score={score} />
    </div>
  );
}

export default App;
```

Replace the ``score`` variable with the desired decimal number. The chart will display the percentage accordingly.

## Customization

If you need to customize the appearance or functionality of the ``CustomRadialBarChart`` component, you can do so by modifying the component's code. Be cautious when making changes, as they may affect the component's responsiveness and overall appearance.