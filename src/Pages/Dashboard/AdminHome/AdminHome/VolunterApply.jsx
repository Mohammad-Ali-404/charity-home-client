import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BiBriefcase } from "react-icons/bi";

const VolunterApply = () => {
  const [volunterHistory, setVolunterHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunterHistory = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/send-email`);
        setVolunterHistory(response.data);
      } catch (error) {
        setError('Error fetching payment history');
      } finally {
        setLoading(false);
      }
    };

    fetchVolunterHistory();
  }, []);

  if (loading) {
    return <p>Loading payment history...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="mt-8 sm:w-[500px] dark:bg-gray-800  dark:text-white bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Notifications</h3>
      <div>
        
          {
            volunterHistory.slice(0, 8).map((volunter, ) =>
              <div key={volunter._id}>
                <div  className="flex items-center gap-2">
                  <div className="bg-green-100 p-3 rounded-full">
                    <BiBriefcase className="text-primary text-lg" />
                  </div>
                  <p className="py-4">
                    <span className="text-blue-700 font-semibold">
                      {volunter.name}
                    </span>{" "}
                    applied for a job
                    <span className="text-primary font-semibold">
                      {" "}
                      Volunter
                    </span>
                  </p>
              </div>
            </div>
            )
          }
        
      </div>{" "}
    </div>
  );
};

export default VolunterApply;