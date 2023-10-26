import React from 'react';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MoreEvent = ({event}) => {
    const {time, date, title, description, location } = event;
    console.log(event)
    return (
        <div>
            <div className="card  bg-base-100 w-full shadow-xl">
                <div className="p-4">
                    <div className='flex justify-between'>
                        <Link>
                            <p className='font-bold text-2xl w-full hover:text-red-600 duration-500 mb-2'>
                                {title}
                            </p>
                        </Link>
                        <h1 className='bg-no-repeat text-center text-base font-semibold' style={{backgroundImage: 'url(https://i.ibb.co/pfr2N7j/date.png)', backgroundSize: '100% 100%',color: 'white',padding: '30px 20px',}}>{date} </h1>
                    </div>
                    <div className='-mt-10'>
                        <p className="dark:text-gray-100 w-5/6 font-normal text-base">
                            {description}
                        </p>
                    </div>                       
                    <div className='flex border-t-2 border-b-2 my-4'>
                            <div className='flex place-items-center border-r-2 p-4 my-2'>
                                <FaLocationDot className='bg-red-100 text-4xl rounded-full p-2'/>
                                    <div className='px-3'>
                                        <p>Location :</p>
                                        <p>{location}</p>
                                    </div>
                            </div>
                        <div className='flex place-items-center pl-5'>
                            <FaClock className='bg-red-100 text-4xl rounded-full p-2'/>
                                <div className='px-3'>
                                    <p>Time :</p>
                                    <p>{time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreEvent;