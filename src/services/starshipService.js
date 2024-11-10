const BASE_URL = `https://swapi.dev/api/starships`;

const search = async (id) => {
    try {
      const queryId = `/${id}/`;
      const res = await fetch(BASE_URL + queryId);
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log(err);
    }
};

export { search };