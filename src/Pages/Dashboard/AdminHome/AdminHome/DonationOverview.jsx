import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const DonationOverview = () => {
    const chartData = [
        { month: "", Funding: 0 },
        { month: "January", Funding: 700 },
        { month: "February", Funding: 1500 },
        { month: "March", Funding: 1400 },
        { month: "April", Funding: 2500 },
        { month: "May", Funding: 2000 },
        { month: "June", Funding: 3100 },
        { month: "July", Funding: 3250 },
        { month: "August", Funding: 2500 },
        { month: "", Funding: 6000 },
    ];

    return (
        <div className="mt-8 dark:bg-gray-800 dark:text-white bg-white sm:w-full w-[450px] rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Total Donation Overview</h3>
            <div className="overflow-x-auto">
                <LineChart
                   width={700}
                   height={300}
                   data={chartData}
                   margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Funding"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </div>
        </div>
    );
};

export default DonationOverview;
