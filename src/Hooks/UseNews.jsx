import { useEffect, useState } from 'react';
import useAxiosSecure from './UseAxiosSecure';

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/news`);
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Handle error, show error message, etc.
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure]);

  return [news, loading];
};

export default useNews;
