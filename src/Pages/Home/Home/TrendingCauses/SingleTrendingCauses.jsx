import React from 'react';
import { BsArrowRight, BsFillCalendarDateFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SingleTrendingCauses = ({ causes }) => {
    const { id, image_url, title, short_description, category, donation_goal, date } = causes;

    return (
        <div className="sm:max-w-lg mx-auto bg-slate-50 rounded overflow-hidden shadow-2xl mb-4">
            <div className="relative group">
                <img
                    src={image_url}
                    className="w-full h-52 object-cover transition-transform transform scale-105 group-hover:scale-110 duration-500"
                />
                <div className="absolute top-0 left-0 m-2  bg-red-600 opacity-90 text-gray-100 rounded-tr rounded-bl p-2 text-sm font-semibold">
                    {category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
                    <div className="bg-gradient-to-b from-transparent to-black opacity-70 w-full h-full absolute"></div>
                    <Link to='donation' className="text-white text-lg font-bold">Donate Now</Link>
                </div>
            </div>

            <div className="px-6 py-4">
                <Link to={`/causesdetails/${id}`}><div className="font-bold text-lg w-full hover:text-red-600 duration-500 mb-2">{title}</div></Link>
                <p className="text-gray-700 text-base w-9/12">{short_description}</p>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700">Donation Goal: {donation_goal}</p>
            </div> 
            <div className="px-6 py-4 flex place-items-center justify-between">
            </div>
            <div className="px-6 py-4 border-t-2 flex place-items-center justify-between">
                <span className="flex sm:px-12 px-9 items-center border-r-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                   <BsFillCalendarDateFill className='mr-2 bg-red-100 rounded-sm text-4xl p-2'/> <span> Date: <br /> {date}</span>
                </span>
                <span className='sm:pr-16 flex items-center py-1 text-sm font-semibold text-gray-700 mr-2'>
                <Link to='donation' className="flex place-items-center self-center px-2 py-3 sm:px-2 text-black font-semibold hover:text-white bg-white rounded-xl shadow hover:bg-[#e03c33] transition-colors duration-500 hover:border-[#e03c33] border-[#e03c33] border mr-4">Donate Now <BsArrowRight className='ml-2 text-lg'/></Link>
                </span>
            </div>
        </div>
    );
};

export default SingleTrendingCauses;
