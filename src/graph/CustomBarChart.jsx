import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend } from "recharts";

/**
 * CustomBarChart component for rendering a dual-axis bar chart.
 * @component
 * @param {Object[]} data - The data for the bar chart.
 * @param {string} data[].day - The day label.
 * @param {number} data[].kilogram - The weight in kilograms.
 * @param {number} data[].calories - The number of calories burned.
 * @returns {ReactElement} The rendered BarChart component.
 */
const CustomBarChart = ({ data }) => {
  const CustomLegend = ({ payload }) => {
    return (
      <ul className="custom-legend">
        {payload.map((entry, index) => (
          <li key={`legend-item-${index}`} style={{ color: entry.color }}>
            <svg width="8" height="8" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill={entry.color} />
            </svg>
            <span style={{ color: "#74798C", marginLeft: "8px" }}>
              {entry.dataKey === "kilogram" ? "Poids (kg)" : "Calories brûlées (kCal)"}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <BarChart width={835} height={320} data={data} barGap={8} className='barChart'>
      <CartesianGrid
        vertical={false}
        horizontal={true}
        strokeDasharray="3 3" // This creates the dotted lines
        stroke="#DEDEDE"
      />
      <YAxis
        yAxisId="left"
        dataKey='kilogram'
        axisLine={{
          stroke: '#DEDEDE',
          strokeWidth: 1,
        }}
        domain={["dataMin - 4", "dataMax + 5"]}
        tickLine={false}
        orientation="right"
        width={40} />
      <YAxis
        yAxisId="right"
        dataKey="calories"
        domain={[0, "dataMax + 20"]}
        tick={false} // Add this line to hide tick marks
        axisLine={false} // Add this line to hide the axis line
        width={40}
      />
      <Tooltip wrapperStyle={{ outline: "none" }}
        content={({ payload }) => {
          if (payload && payload.length) {
            return (
              <div className='tooltip'>
                <p className='weight'>{payload[0].payload.kilogram} kg</p>
                <p className='calories'>{payload[0].payload.calories} Kcal</p>
              </div>
            );
          }
          return null;
        }}
      />
      <Legend
        align="right"
        verticalAlign="top"
        style={{ right: "34px" }}
        content={<CustomLegend />}
      />

      <Bar yAxisId="left" dataKey='kilogram' fill='#282D30' name='Kilogram' barSize={7} legendType='circle' radius={[5, 5, 0, 0]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill='#282D30' />
        ))}
      </Bar>
      <Bar yAxisId="right" dataKey='calories' fill='#E60000' name='Calories' barSize={7} legendType='circle' radius={[5, 5, 0, 0]}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill='#E60000' />
        ))}
      </Bar>
      <XAxis
        dataKey='day'
        axisLine={{
          stroke: '#DEDEDE',
          strokeWidth: 1,
        }}
        tickLine={false}
        height={40}
        tick={{
          fill: '#9B9EAC',
          fontSize: '14px',
          dy: 10, // add some extra margin between tick and label
        }}
        tickMargin={15} // add margin between axis line and tick
        tickFormatter={(value, index) => index + 1}
      />

    </BarChart>
  );
};
CustomBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default CustomBarChart;

