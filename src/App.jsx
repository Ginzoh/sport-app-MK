import { useEffect, useState } from 'react';
import './App.css'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend } from "recharts";
import SimpleRadarChart from './graph/RadarChart';
import CustomPieChart from './graph/PieChart';
import fetchData from './util/fetchData';
import CustomLineChart from './graph/CustomLineChart';
import StatsDisplay from './component/StatsDisplay';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from './data/data'

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [score, setScore] = useState(null);
  const [session, setSession] = useState([]);
  const [perfValues, setperfValues] = useState([])
  const [perfKind, setperfKind] = useState({})

  useEffect(() => {
    loadData();
    console.log(perfValues)
  }, []);

  async function getData(index, type) {
    if (import.meta.env.VITE_REACT_APP_MOCK === 'FALSE') {
      return await fetchData(index, type);
    } else {
      switch (type) {
        case "activity":
          return USER_ACTIVITY[0];
        case "average-sessions":
          return USER_AVERAGE_SESSIONS[0];
        case "performance":
          return USER_PERFORMANCE[0];
        default:
          return USER_MAIN_DATA[0];
      }
    }
  }

  async function loadData() {
    const actData = await getData(12, "activity");
    setData(actData.sessions);

    const userData = await getData(12);
    setUser(userData.userInfos);
    setScore(userData.todayScore);

    const avgSessionData = await getData(12, "average-sessions");
    setSession(avgSessionData.sessions);

    const perfData = await getData(12, "performance");
    setperfKind(perfData.kind);
    setperfValues(perfData.data);

    console.log(perfKind?.[1]);
  }
  const transformedPerfValues = perfValues.map((item) => ({
    ...item,
    kind: perfKind[item.kind] || item.kind,
  }));

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
    <section className='mainPage'>
      <h1 className="bonjour">Bonjour <span className="firstName">{user.firstName}</span></h1>
      <p className="bravo">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="chartStats">
        <div className="chartsContainer">
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
          <div className="lineContainer">

            <h3 className="lineTitle">
              <span className="lineTitlePart">Durée moyenne des</span>
              <span className="lineTitlePart">sessions</span>
            </h3>

            <div className="responsiveLineChartContainer">
              <ResponsiveContainer width="100%" height="100%">
                <CustomLineChart data={session} />
              </ResponsiveContainer>
            </div>
          </div>
          <div className="radarContainer">
            <SimpleRadarChart dataD={transformedPerfValues} />
          </div>
          <CustomPieChart score={score} />
        </div>
        <StatsDisplay />
      </div>
    </section>
  )
}

export default App
