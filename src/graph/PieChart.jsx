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

CustomPieChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CustomPieChart;