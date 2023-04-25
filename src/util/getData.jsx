import fetchData from "./fetchData";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/data";

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

export default getData;

