import { useEffect, useState } from 'react';
import './App.css'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend } from "recharts";


async function fetchData(id, el = false) {
  let response;
  if (el) {
    response = await fetch(`http://localhost:3000/user/${id}/${el}`);
  }
  else {
    response = await fetch(`http://localhost:3000/user/${id}`);
  }
  const jsonData = await response.json();
  return jsonData.data;
}

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const dataD = [
    { day: 'M', n: 10 },
    { day: 'T', n: 20 },
    { day: 'W', n: 30 },
    { day: 'Th', n: 25 },
    { day: 'F', n: 15 },
    { day: 'Sa', n: 5 },
    { day: 'Su', n: 0 },
  ];
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const actData = await fetchData(12, "activity");
    setData(actData.sessions);
    console.log(actData.sessions)
    const userData = await fetchData(12);
    setUser(userData.userInfos)
  }
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
      <div className="chartsContainer">
        <BarChart width={800} height={320} data={data} barGap={8} className='barChart'>
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
          <h3 className="lineTitle">Durée moyenne des sessions</h3>
          <LineChart width={270} height={220} data={dataD} stroke="#FFFFFF" fill="#FF0000" className='linechart'>
            <CartesianGrid stroke='transparent' />
            <XAxis dataKey="day"
              axisLine={false} height={40} tickLine={false} tick={{ fill: "#fff", opacity: '0.5' }} />
            <YAxis dataKey="n" tick={false}
              axisLine={false} width={17} />
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
            <Line type="monotone" dataKey="n" stroke="#fff"
              strokeWidth={(index) => (index === 0 ? 1 : index * 100)} />
          </LineChart>
        </div>
      </div>
    </section>
  )
}

export default App
