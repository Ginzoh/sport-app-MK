/**
 * Fetches user data from the API server.
 * @async
 * @param {number} id - The user's ID.
 * @param {string} [el=false] - The optional element to fetch (e.g., 'activity', 'average-sessions', 'performance').
 * @returns {Promise<Object>} The fetched user data as a JSON object.
 */
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

export default fetchData
