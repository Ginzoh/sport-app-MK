import fetchData from "./fetchData";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data";

/**
 * Fetches the data for a specific user and type (activity, average-sessions, performance, or main data).
 * If the environment variable VITE_REACT_APP_MOCK is set to 'FALSE', it will fetch data using the fetchData function.
 * Otherwise, it will use the provided mock data.
 *
 * @param {number} index - The user ID.
 * @param {string} [type] - The type of data to fetch (activity, average-sessions, performance, or main data).
 * @returns {Promise<Object>} A promise that resolves to the fetched data.
 */
async function getData(index, type) {
  if (import.meta.env.VITE_REACT_APP_MOCK === 'FALSE') {
    return await fetchData(index, type);
  } else {
    let i = 0;
    if (index === 18) i = 1;
    switch (type) {
      case "activity":
        return USER_ACTIVITY[i];
      case "average-sessions":
        return USER_AVERAGE_SESSIONS[i];
      case "performance":
        return USER_PERFORMANCE[i];
      default:
        return USER_MAIN_DATA[i];
    }
  }
}

export default getData;

