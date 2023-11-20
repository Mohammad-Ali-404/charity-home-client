import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Container from '../Shared/Container/Container';
import image from '../../assets/logo/master.png'
import image2 from '../../assets/logo/paypal.png'
import image3 from '../../assets/logo/skill.png'
import image4 from '../../assets/logo/visa.png'
import { Link } from 'react-router-dom';
import { BsFillCalendar2DateFill, BsFillCheckCircleFill, BsTelephoneInbound } from 'react-icons/bs';
import { IoIosMailOpen } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { AiTwotoneTag } from 'react-icons/ai';
import useTrendingCauses from '../../Hooks/useTrendingCauses';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Donation = () => {
    const [trendingCauses] = useTrendingCauses();
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
                    <form className='sm:w-7/12 w-full'>
                        <div className='flex justify-between rounded shadow-2xl shadow-slate-400 text-2xl font-semibold px-2 py-10'>
                            <h1 className='sm:w-auto sm:text-2xl text-xl w-7/12 pl-5'>Enter your donation amount</h1>
                            <div className='flex items-center -mt-5'>
                                <h1 className=''>$</h1>
                                <input
                                    type="number"
                                    id="donationAmount"
                                    className="mt-1 p-2 sm:w-auto border-b-2 border-red-500 focus:border-b-2 hover:border-b-2 focus:outline-none  w-40"
                                    // value={donationAmount}
                                    // onChange={(e) => setDonationAmount(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="card pt-16 w-full space-y-6 sm:px-14 mt-10 shadow-2xl shadow-slate-400 sm:w-[925px] px-6 rounded">
                        <h1 className='sm:w-auto sm:text-2xl text-xl w-7/12 font-semibold'>Enter your Details</h1>
                            <div className="sm:flex sm:space-x-6 ">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm bg-red-50 focus:ring focus:border-red-400 dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="email"
                                    placeholder="Enter Your last Name"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 bg-red-50focus:ring dark:bg-gray-800"
                                    required
                                    />
                                </label>
                                </div>
                            </div>
                            <div className="sm:flex sm:space-x-6">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="email"
                                    placeholder="Enter Your Phone Number"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                            </div>
                            <div className="sm:flex sm:space-x-6">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="email"
                                    placeholder="Enter Your Country"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                            </div>
                            
                            <label className="block pb-10">
                                <textarea
                                rows="6"
                                className="block sm:w-[790px] w-full pt-4 pl-3 rounded-sm focus:border-red-500 border border-gray-300 font-normal bg-red-50 dark:bg-gray-800"
                                placeholder='Write Your comment'
                                ></textarea>
                            </label>
                        </div>
                        <div className="card pt-16 w-full space-y-6 sm:px-14 mt-10 shadow-2xl shadow-slate-400 sm:w-[925px] px-6 rounded">
                            <h1 className='sm:w-auto sm:text-2xl text-xl w-7/12 font-semibold'>Enter your Bank Details</h1>
                            <div className='flex sm:gap-5 gap-2'>
                                <Link><img src={image} alt="" /></Link>
                                <Link><img src={image2} alt="" /></Link>
                                <Link><img src={image3} alt="" /></Link>
                                <Link><img src={image4} alt="" /></Link>
                            </div>
                            <div className="sm:flex sm:space-x-6 ">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Account Holder Name"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm bg-red-50 focus:ring focus:border-red-400 dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="name"
                                    placeholder="Card Number"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 bg-red-50focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                            </div>
                            <div className="sm:flex sm:space-x-6 pb-10">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Expire Date"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="TEXT"
                                    placeholder="CVV"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                            </div>
                        </div>
                        <span className='flex justify-start sm:pb-0 text-sm font-semibold text-gray-700 '>
                                <Link className='py-10'>
                                    <button type='submit' className='px-7 flex items-center py-3 rounded-sm text-white text-lg bg-red-600 hover:bg-slate-700 duration-700 font-semibold'><BsFillCheckCircleFill className='mr-2'/>Donate Now</button>
                                </Link>
                            </span>
                    </form>
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
                    </div>
                </div>
            </Container>
        </div> 
        </div>
    );
};

export default Donation;