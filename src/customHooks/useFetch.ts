import { useEffect, useState } from "react";
import axiosApi from "src/utils/axios";

function useFetch(url: any) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosApi.get(url);
        setData(res?.data?.data?.attributes);
      } catch (e) {
        setLoading(false);
        setError(e);
        console.error(e);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data, error };
}
export default useFetch;
