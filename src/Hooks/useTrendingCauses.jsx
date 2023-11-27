import { useEffect, useState } from 'react';
import useAxiosSecure from './UseAxiosSecure';

const useTrendingCauses = () => {
  const [trendingCauses, setTrendingCauses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/causes`);
        setTrendingCauses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trending causes:', error);
        // Handle error, show error message, etc.
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure]);

  return [trendingCauses, loading];
};

export default useTrendingCauses;
