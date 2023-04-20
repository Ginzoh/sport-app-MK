import { useState } from "react";
import PropTypes from 'prop-types';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ReferenceArea,
} from "recharts";
import CustomDot from "./CustomDot/CustomDot";

const CustomLineChart = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <LineChart
      data={data}
      className="linechart" width={250}
      height={230}
    >
      <CartesianGrid stroke='transparent' />
      {activeIndex !== null && (
        < ReferenceArea x1={data[activeIndex].day} x2={data[data.length - 1].day} fill="black" fillOpacity={0.4} />
      )}

      <XAxis dataKey="day"
        axisLine={false} height={70} tickLine={false} tickFormatter={(value, index) => {
          const days = ["L", "M", "M", "J", "V", "S", "D"];
          return days[value - 1];
        }} tick={{
          fill: "#fff", opacity: '0.5',
          dy: 10,
        }} />
      <YAxis dataKey="sessionLength" tick={false}
        axisLine={false} width={25} />
      <Tooltip wrapperStyle={{ outline: "none" }}
        content={({ payload }) => {
          if (payload && payload.length) {
            return (
              <div className='tooltipLine'>
                <p >{payload[0].value} min</p>
              </div>
            );
          }
          return null;
        }}
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <Line
        type="basis"
        dataKey="sessionLength"
        stroke="url(#lineGradient)"
        isAnimationActive={false}
        dot={<CustomDot active={false} setActiveIndex={setActiveIndex} />}
        activeDot={<CustomDot active={true} setActiveIndex={setActiveIndex} />}
        strokeWidth={2}
      />

    </LineChart>
  );
};

CustomLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CustomLineChart;
