import { useEffect, useState } from 'react';
import './App.css'
import { ResponsiveContainer } from "recharts";
import SimpleRadarChart from './graph/RadarChart';
import CustomRadialBarChart from './graph/CustomRadialBarChart';
import CustomLineChart from './graph/CustomLineChart';
import StatsDisplay from './component/StatsDisplay';
import CustomBarChart from './graph/CustomBarChart';
import loadData from './util/LoadData';
import getData from './util/getData';

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
    loadData(getData, {
      setData,
      setUser,
      setScore,
      setKeyData,
      setSession,
      setperfKind,
      setperfValues,
      setLoading,
    });
  }, []);

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
