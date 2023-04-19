/**
 * @file CustomPieChart component file.
 * This file contains the definition of the CustomPieChart component and its related PropTypes.
 */

import PropTypes from 'prop-types';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Label,
  LabelList,
} from 'recharts';
import './PieChart.css'

/**
 * CustomLabel component.
 * @function CustomLabel
 * @param {Object} props - The properties object.
 * @param {Object} props.viewBox - The viewBox object.
 * @param {number} props.value - The value to display.
 * @returns {ReactElement} The CustomLabel component.
 */
const CustomLabel = (props) => {
  const { viewBox, value } = props;
  const { cx, cy } = viewBox;

  return (
    <text x={cx} y={cy} dy={-10} fontSize={26} fontWeight={700} textAnchor="middle" fill="#000">
      {`${value}%`}
    </text>
  );
};

/**
 * CustomLabel2 component.
 * @function CustomLabel2
 * @param {Object} props - The properties object.
 * @param {Object} props.viewBox - The viewBox object.
 * @returns {ReactElement} The CustomLabel2 component.
 */
const CustomLabel2 = (props) => {
  const { viewBox } = props;
  const { cx, cy } = viewBox;

  return (
    <>
      <text
        x={cx}
        y={cy}
        dy={10}
        fontSize={16}
        fontWeight={500}
        textAnchor="middle"
        fill="#74798C"
      >
        de votre
      </text>
      <text
        x={cx}
        y={cy}
        dy={30}
        fontSize={16}
        fontWeight={500}
        textAnchor="middle"
        fill="#74798C"
      >
        objectif
      </text>
    </>
  );
};

/**
 * CustomPieChart component.
 * @function CustomPieChart
 * @param {Object} props - The properties object.
 * @param {number} props.score - The score to be displayed as a percentage.
 * @returns {ReactElement} The CustomPieChart component.
 */
const CustomPieChart = ({ score }) => {
  const percentage = Math.round(score * 100);
  const remaining = 100 - percentage;
  const data = [
    { name: 'Percentage', value: percentage },
    { name: 'Remaining', value: remaining },
  ];
  return (
    <div className='pieContainer'>
      <h4 className='score'>Score</h4>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={-277}
            endAngle={80}
            outerRadius="65%"
            innerRadius="65%"
            stroke="#FF0000"
            strokeWidth={7}
            fill="none"
            style={{ borderRadius: '10px' }}
          >
            <Cell key="Percentage" stroke="#FF0000" />
            <Cell stroke="transparent" />
            <Label width={30} position="center" content={<CustomLabel />} value={data[0].value} />
            <LabelList position="center" content={<CustomLabel2 />} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 * PropTypes for the CustomPieChart component.
 */
CustomPieChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CustomPieChart;