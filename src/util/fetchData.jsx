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
