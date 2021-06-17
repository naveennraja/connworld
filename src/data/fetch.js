//import axios from 'axios';
import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(url);
      setData(req.data.contents);
    }
    fetchData();
  }, [url]);

  return data;
};
export default useFetch;
