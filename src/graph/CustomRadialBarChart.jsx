import PropTypes from 'prop-types';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import './CustomRadialBarChart.css';

const CustomLabel = (props) => {
  const { viewBox, value } = props;
  const { cx, cy } = viewBox;

  return (
    <text x={cx} y={cy} dy={-10} fontSize={26} fontWeight={700} textAnchor="middle" fill="#000">
      {`${value}%`}
    </text>
  );
};

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

const CustomRadialBarChart = ({ score }) => {
  const percentage = Math.round(score * 100);
  const data = [{ name: 'Percentage', value: percentage }];
  const endAngle = -277 + (357 * percentage) / 100;
  return (
    <div className="pieContainer">
      <h4 className="score">Score</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="70%"
          data={data}
          startAngle={-277}
          endAngle={endAngle}
        >
          <RadialBar
            minAngle={15}
            endAngle={endAngle}
            dataKey="value"
            cornerRadius={7}
            fill="#FF0000"
          >
            <LabelList width={30} position="center" content={<CustomLabel />} value={percentage} />
            <LabelList position="center" content={<CustomLabel2 />} />
          </RadialBar>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

CustomRadialBarChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CustomRadialBarChart;
