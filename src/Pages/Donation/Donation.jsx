/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Container from '../Shared/Container/Container';
import { Link } from 'react-router-dom';
import { BsFillCalendar2DateFill,  BsTelephoneInbound } from 'react-icons/bs';
import { IoIosMailOpen } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { AiTwotoneTag } from 'react-icons/ai';
import useTrendingCauses from '../../Hooks/useTrendingCauses';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Payment from '../../Payment/Payment';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';

const Donation = () => {
    const [trendingCauses] = useTrendingCauses();
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [axiosSecure] = useAxiosSecure() 
    useEffect(() => {
      const fetchPaymentHistory = async () => {
          const response = await axiosSecure.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/payment-history`);
          setPaymentHistory(response.data);
      };
      fetchPaymentHistory();
    }, [axiosSecure]);
    const donationsWithNames = paymentHistory.filter(
        (payment) => payment.name !== undefined
      );
    
    return (            
        <div>
            <HelmetProvider>
                <Helmet><title>Simple Giving | Donation</title></Helmet>
            </HelmetProvider>
            <div>
            <PageTitle heading='Make a Donation' subHeading='Donation'/>
            <div className='text-center py-10'>
                <h1 className='text-4xl text-red-500 font-semibold title '>Make a Donation</h1>
                <h1 className='text-4xl text-slate-800 font-semibold'><span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>Donate</span> now to help the
                <br />people</h1>
            </div>
            <Container>
                <div className='sm:flex  row-auto'>
                    <Payment/>
                    <div className='sm:w-5/12 w-full'>
                        <div>
                            {trendingCauses.slice(0, 1).map((causes) => (
                            <div key={causes.id}>
                                <div className="sm:max-w-lg mx-auto bg-slate-50 rounded-lg overflow-hidden shadow-2xl mb-4">
                                    <div className="relative group">
                                        <img
                                            src={causes.image_url}
                                            className="w-full h-52 object-cover transition-transdiv transdiv scale-105 group-hover:scale-110 duration-500"
                                        />
                                        <div className="absolute top-0 left-0 m-2  bg-red-600 opacity-90 text-gray-100 rounded-tr rounded-bl p-2 text-sm font-semibold">
                                            {causes.category}
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 transition-opacity">
                                            <div className="bg-gradient-to-b from-transparent to-black opacity-70 w-full h-full absolute"></div>
                                            <Link to='donation'><p className="text-white text-lg font-bold">Donate Now</p></Link>
                                        </div>
                                    </div>

                                    <div className="px-6 py-4">
                                        <Link><div className="font-bold text-lg w-full hover:text-red-600 duration-500 mb-2">{causes.title}</div></Link>
                                        <p className="text-gray-700 text-base w-9/12">{causes.short_description}</p>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <div>
                                            <h1 className='font-bold text-lg'>Achived: {causes.donation_achived}</h1>
                                            <h1 className='font-bold text-lg'>Target: {causes.donation_goal}</h1>
                                        </div>
                                        <div>
                                            <h1 className='text-end text-4xl font-bold text-cyan-500'>0%</h1>
                                            <h1 className='text-lg font-medium'>Pledged So Far</h1>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            ))}
                        </div>
                        <div>
                            <div className=" p-8 sm:flex gap-5 sm:max-w-lg mx-auto bg-slate-50 rounded-lg overflow-hidden shadow-2xl mb-4">
                                <div className="flex-shrink-0 w-60 mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                    <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <div>
                                        <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
                                        <span className="text-sm dark:text-gray-400">General manager</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="flex items-center space-x-2">
                                            <IoIosMailOpen className='bg-red-100 text-2xl rounded p-1'/>
                                            <span className="dark:text-gray-400">leroy.jenkins@company.com</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                                <BsTelephoneInbound className='bg-red-100 text-2xl rounded p-1'/>
                                            <span className="dark:text-gray-400">+25 381 77 983</span>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <AiTwotoneTag className='bg-red-100 text-2xl rounded p-1'/>
                                            <h1 className="dark:text-gray-400"><span className='text-base font-medium text-gray-600'>Category :</span> Education</h1>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <FaLocationDot className='bg-red-100 text-2xl rounded p-1'/>
                                            <h1 className="dark:text-gray-400"><span className='text-base font-medium text-gray-600'>Location :</span> New York, united States</h1>
                                        </span>
                                        <span className="flex items-center space-x-2">
                                            <BsFillCalendar2DateFill className='bg-red-100 text-2xl rounded p-1'/>
                                            <h1 className="dark:text-gray-400"><span className='text-base font-medium text-gray-600'>Date :</span></h1>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 gap-5 sm:max-w-lg mx-auto bg-slate-50 rounded-lg overflow-hidden shadow-2xl mb-4">
                                <h1 className='border-b-2 font-medium text-xl'>Recent Donation</h1>
                                {donationsWithNames.length > 0 ? (
                    // Render names and other details from the payment history
                    <div>
                      {donationsWithNames.map((donation, index) => (
                        <div key={index} className='flex justify-between'>
                          <div>
                            <h1>{donation.name}</h1>
                            <h1>{donation.date}</h1>
                            {/* Display other details as needed */}
                          </div>
                          <div></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Show a message if there are no donations with names in the payment history
                    <p>No recent donations with names.</p>
                  )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div> 
        </div>
    );
};

export default Donation;