import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const CustomTick = ({ x, y, payload }) => {
  let textAnchor;

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Get the capitalized value
  const capitalizedValue = capitalizeFirstLetter(payload.value);

  switch (payload.value) {
    case "cardio":
    case "strength":
      textAnchor = "middle";
      break;
    case "energy":
    case "endurance":
      textAnchor = "right";
      break;

    case "speed":
    case "intensity":
      textAnchor = "end";
      break;
    default:
      textAnchor = "middle";
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={0}
        textAnchor={textAnchor}
        fill="#fff"
        fontSize="10.5"
        fontWeight="500"
        style={{ margin: "6px" }}
      >
        {capitalizedValue}
      </text>
    </g>
  );
};


const SimpleRadarChart = ({ dataD }) => {
  return (
    <ResponsiveContainer width="100%" height="81%" style={{ backgroundColor: '#282D30' }}>
      <RadarChart
        data={dataD}
        style={{
          transform: 'translate(-1%, 15%) scale(1.02)', // Adjust the translate and scale values to center and resize the chart
        }}
      >
        <PolarGrid stroke="#fff" radialLines={false} gridType="polygon" />
        <PolarAngleAxis tickLine={false} dataKey="kind" stroke="#fff" tick={<CustomTick />} />
        <Radar
          dataKey="value"
          stroke="rgba(255, 1, 1, 0.7)"
          fill="rgba(255, 1, 1, 0.7)"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

SimpleRadarChart.propTypes = {
  dataD: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default SimpleRadarChart;
