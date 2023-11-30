/* eslint-disable no-undef */
import React from 'react';
import { BsFillCalendarDateFill, BsFillPeopleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SingleCauses = ({causes}) => {
    const {image_url, title, short_description, category, date, donation_goal, donation_achived } = causes;
    return (
        <div>
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
                    <Link to='donation'><p className="text-white text-lg font-bold">Donate Now</p></Link>
                </div>
            </div>

            <div className="px-6 py-4">
                <Link to={`/causesdetails/${title}`}><div className="font-bold text-lg w-full hover:text-red-600 duration-500 mb-2">{title}</div></Link>
                <p className="text-gray-700 text-base w-9/12">{short_description}</p>
            </div>
            <div className='px-6 py-4 flex justify-between'>
                <div>
                    <h1 className='font-bold text-lg'>Achived: ${donation_achived}</h1>
                    <h1 className='font-bold text-lg'>Target: ${donation_goal}</h1>
                </div>
                <div>
                    <h1 className='text-end text-4xl font-bold text-cyan-500'>0%</h1>
                    <h1 className='text-lg font-medium'>Pledged So Far</h1>
                </div>
            </div>
            <div className="px-6 py-4 border-t-2 flex place-items-center justify-between">
                <span className="flex sm:px-12 px-9 items-center border-r-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                   <BsFillCalendarDateFill className='mr-2 bg-red-100 rounded-sm text-4xl p-2'/> <span> Date: <br /> {date}</span>
                </span>
                <span className='pr-16 flex sm:px-16 items-center py-1 text-sm font-semibold text-gray-700 mr-2'>
                    <BsFillPeopleFill className='mr-2 bg-red-100 rounded-sm text-4xl p-2'/> <span> Posted: <br /> Admin</span>
                </span>
            </div>
            </div>
        </div>
    );
};

export default SingleCauses;