import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async (urlComponent = "") => {
      const urlGet = `${url}${urlComponent}`;
      setLoading(true);
      const response = await fetch(urlGet);
      setResponse(response);
      const datas = await response.json();
      setLoading(false);
      setData(datas);
    })();
  }, [url]);
  return { response, data, loading };
};

export default useFetch;
