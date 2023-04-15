import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Intensité', value: 80 },
  { name: 'Vitesse', value: 60 },
  { name: 'Force', value: 50 },
  { name: 'Endurance', value: 90 },
  { name: 'Energie', value: 75 },
  { name: 'Cardio', value: 40 },
];

const CustomTick = ({ x, y, payload }) => {
  let textAnchor;

  switch (payload.value) {
    case "Intensité":
    case "Endurance":
      textAnchor = "middle";
      break;
    case "Vitesse":
    case "Force":
      textAnchor = "right";
      break;
    case "Cardio":
    case "Energie":
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
        {payload.value}
      </text>
    </g>
  );
};



const SimpleRadarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#282D30' }}>
      <RadarChart data={data} >
        <PolarGrid stroke="#fff" radialLines={false} gridType="polygon" />
        <PolarAngleAxis tickLine={false} dataKey="name" stroke="#fff" tick={<CustomTick />} />
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

export default SimpleRadarChart;
