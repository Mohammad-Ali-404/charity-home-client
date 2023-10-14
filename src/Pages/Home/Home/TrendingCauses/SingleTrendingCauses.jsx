import React from 'react';
import { Link } from 'react-router-dom';

const SingleTrendingCauses = ({ causes }) => {
    const { image_url, title, short_description, category, donation_goal, date } = causes;

    return (
        <div className="max-w-xs mx-auto bg-slate-50 rounded overflow-hidden shadow-lg mb-4">
            <div className="relative group">
                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-52 object-cover transition-transform transform scale-105 group-hover:scale-110 duration-500"
                />
                <div className="absolute top-0 left-0 m-2  bg-red-600 opacity-90 text-gray-100 rounded-tr rounded-bl p-2 text-sm font-semibold">
                    {category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
                    <div className="bg-gradient-to-b from-transparent to-black opacity-70 w-full h-full absolute"></div>
                    <p className="text-white text-lg font-bold">Donate Now</p>
                </div>
            </div>

            <div className="px-6 py-4">
                <Link><div className="font-bold text-xl hover:text-red-600 duration-500 mb-2">{title}</div></Link>
                <p className="text-gray-700 text-base">{short_description}</p>
            </div>

            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {date}
                </span>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700">Donation Goal: ${donation_goal}</p>
            </div> 
        </div>
    );
};

export default SingleTrendingCauses;
