import DataModel from "./DataModel";

async function loadData(getData, setStates) {
  const {
    setData,
    setUser,
    setScore,
    setKeyData,
    setSession,
    setperfKind,
    setperfValues,
    setLoading,
  } = setStates;

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

export default loadData