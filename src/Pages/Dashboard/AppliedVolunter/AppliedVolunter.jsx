import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashboardTitle from '../Shared/DashboardTitle';

const AppliedVolunter = () => {
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
    <div >
        <div className="pt-10">
            <DashboardTitle title='Volunter History' subTitle="Manage all Applied Volunteer details" />
        </div>
    <div className='mt-10 bg-white p-8 rounded-xl'>
      <h2 className="text-xl py-5">Applied Volunteer: {volunterHistory.length}</h2>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 md:py-5 text-base md:text-lg px-3 md:ps-5">
                Serial
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                Name
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                email
              </th>
              <th className="py-3 md:py-5 text-justify pl-6 text-base md:text-lg">
                Phone
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                Subject
              </th>
              <th className="py-3 md:py-5 text-left text-base md:text-lg">
                Message
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {volunterHistory.map((volunter, index) => (
              <tr key={volunter._id}>
                <th className="py-2 md:py-4">{index + 1}</th>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {volunter.name}
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {volunter.email}
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {volunter.phone}
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-semibold text-xs md:text-sm lg:text-base xl:text-lg px-3">
                    {volunter.subject}
                  </p>
                </td>
                <td className="py-2 md:py-4">
                  <p className="font-normal text-xs md:text-sm lg:text-base  px-3">
                    {volunter.message}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default AppliedVolunter;
