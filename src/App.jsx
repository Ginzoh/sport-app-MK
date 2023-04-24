import { useEffect, useState } from 'react';
import './App.css'
import { ResponsiveContainer } from "recharts";
import SimpleRadarChart from './graph/RadarChart';
import CustomRadialBarChart from './graph/CustomRadialBarChart';
import fetchData from './util/fetchData';
import CustomLineChart from './graph/CustomLineChart';
import StatsDisplay from './component/StatsDisplay';
import CustomBarChart from './graph/CustomBarChart';
import DataModel from './util/DataModel';
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from './data/data'

/**
 * Main App component.
 * @component
 * @returns {ReactElement} The rendered App component with all its children components.
 */
function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [keyData, setKeyData] = useState({});
  const [score, setScore] = useState(null);
  const [session, setSession] = useState([]);
  const [perfValues, setperfValues] = useState([])
  const [perfKind, setperfKind] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
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
    const actDataRaw = await getData(12, "activity");
    const userDataRaw = await getData(12);
    const avgSessionDataRaw = await getData(12, "average-sessions");
    const perfDataRaw = await getData(12, "performance");

    if (import.meta.env.VITE_REACT_APP_MOCK === 'FALSE') {
      const actDataModel = new DataModel(actDataRaw);
      setData(actDataModel.formatActivityData().sessions);

      const userDataModel = new DataModel(userDataRaw);
      setUser(userDataModel.formatUserMainData().userInfos);
      setScore(userDataModel.formatUserMainData().todayScore);
      setKeyData(userDataModel.formatUserMainData().keyData);
      const avgSessionDataModel = new DataModel(avgSessionDataRaw);
      setSession(avgSessionDataModel.formatAverageSessionsData().sessions);

      const perfDataModel = new DataModel(perfDataRaw);
      setperfKind(perfDataModel.formatPerformanceData().kind);
      setperfValues(perfDataModel.formatPerformanceData().data);

    } else {
      setData(actDataRaw.sessions);
      setUser(userDataRaw.userInfos);
      setScore(userDataRaw.todayScore);
      setKeyData(userDataRaw.keyData);
      setSession(avgSessionDataRaw.sessions);
      setperfKind(perfDataRaw.kind);
      setperfValues(perfDataRaw.data);
    }
    setLoading(false);
  }

  const transformedPerfValues = perfValues.map((item) => ({
    ...item,
    kind: perfKind[item.kind] || item.kind,
  }));

  return (
    <section className='mainPage'>
      <h1 className="bonjour">Bonjour <span className="firstName">{user.firstName}</span></h1>
      <p className="bravo">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="chartStats">
        {!loading ? (
          <div className="chartsContainer">
            <div className="BarContainer">
              <ResponsiveContainer width="100%" height="100%">
                <CustomBarChart data={data} />
              </ResponsiveContainer>
            </div>
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
            <CustomRadialBarChart score={score} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <StatsDisplay keyData={keyData} />
      </div>
    </section>
  )
}

export default App
