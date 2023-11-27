import React from 'react';
import Container from '../../../Shared/Container/Container';
import '../HelpWithEducation/HelpWithEducation.css';
import image from '../../../../assets/image/event-big.png';
import { useState, useEffect } from 'react';
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import MoreEvent from './MoreEvent';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';

const UpcomingEvents = () => {
    const [SingleEvent, setSingleEvent] = useState([]);
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosSecure.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/event`);
            setSingleEvent(response.data);
          } catch (error) {
            console.error('Error fetching single event:', error);
            // Handle error, show error message, etc.
          }
        };
    
        fetchData();
      }, [axiosSecure]);

    return (
        <div className='py-10 bg-slate-50'>
            <Container>
                <div className='text-center'>
                    <h1 className='title text-4xl font-semibold text-red-600'>Upcoming Events</h1>
                    <h1 className='heading text-4xl'>Join our upcoming <span className='bg-no-repeat' style={{ backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition: 'bottom', display: 'inline', lineHeight: '1', }}>events</span> for <br />contribution</h1>
                </div>
                <div className='flex flex-col md:flex-row mt-10 gap-10 justify-between'>
                    <div className="w-full rounded-md shadow-xl card ">
                        <img src={image} alt="" className="object-cover object-center w-full rounded-md dark:bg-gray-500" />
                        <div className="mt-6  p-6 pb-0">
                            {SingleEvent.slice(0, 1).map((SingleEvent) => (
                                <div key={SingleEvent.id}>
                                    <div className='flex justify-between'>
                                        <Link to={`/event/${SingleEvent.id}`}>{/* Add a proper URL here */}
                                            <p className='font-bold text-2xl w-full hover:text-red-600 duration-500 mb-2'>
                                                {SingleEvent.title}
                                            </p>
                                        </Link>
                                        <h1 className='bg-no-repeat text-center text-base font-semibold' style={{ backgroundImage: 'url(https://i.ibb.co/pfr2N7j/date.png)', backgroundSize: '100% 100%', color: 'white', padding: '30px 20px' }}>{SingleEvent.date}</h1>
                                    </div>
                                    <div className='-mt-10'>
                                        <p className="dark:text-gray-100 w-4/5 font-normal text-base">
                                            {SingleEvent.description}
                                        </p>
                                    </div>
                                    <div className='flex border-t-2 border-b-2 my-4'>
                                        <div className='flex place-items-center border-r-2 p-4 my-2'>
                                            <FaLocationDot className='bg-red-100 text-4xl rounded-full p-2' />
                                            <div className='px-3'>
                                                <p>Location :</p>
                                                <p>{SingleEvent.location}</p>
                                            </div>
                                        </div>
                                        <div className='flex place-items-center pl-5'>
                                            <FaClock className='bg-red-100 text-4xl rounded-full p-2' />
                                            <div className='px-3'>
                                                <p>Time :</p>
                                                <p>{SingleEvent.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Link to='/contact'><button className="btn bg-red-500 mt-10 text-white hover:bg-slate-700 duration-500 w-full">Join Event</button></Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-rows-3 gap-6'>
                        {SingleEvent.slice(1, 4).map((event) => (
                            <MoreEvent key={event._id} event={event} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default UpcomingEvents;

