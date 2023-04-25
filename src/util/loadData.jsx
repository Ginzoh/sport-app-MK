import DataModel from "./DataModel";

/**
 * Loads the data for a specific user, formats the data using the DataModel class, and updates the corresponding state variables.
 *
 * @param {function} getData - The getData function for fetching data.
 * @param {Object} setStates - An object containing the setState functions for updating the state variables.
 * @param {function} setStates.setData - The setData function for updating the activity data state.
 * @param {function} setStates.setUser - The setUser function for updating the user data state.
 * @param {function} setStates.setScore - The setScore function for updating the score data state.
 * @param {function} setStates.setKeyData - The setKeyData function for updating the key data state.
 * @param {function} setStates.setSession - The setSession function for updating the average sessions data state.
 * @param {function} setStates.setperfKind - The setperfKind function for updating the performance kind data state.
 * @param {function} setStates.setperfValues - The setperfValues function for updating the performance values data state.
 * @param {function} setStates.setLoading - The setLoading function for updating the loading state.
 * @returns {Promise<void>} A promise that resolves when all data is loaded and states are updated.
 */
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