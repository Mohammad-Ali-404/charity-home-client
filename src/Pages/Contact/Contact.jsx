import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import '../Home/Home.css'
import { GrLocation, GrMail, GrPhone } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Contact = () => {
    return (
        <div >
            <PageTitle heading='Contact' subHeading='Contact'/>
            <div className='text-center py-10'>
                <h1 className='text-4xl text-red-500 font-semibold title '>Contact With Us</h1>
                <h1 className='text-4xl text-slate-800 font-semibold'>Get in <span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>touch</span>with us & stay updates</h1>
            </div>
            <div className='bg-slate-50'>
                <section className="py-6 dark:text-gray-50">
                    <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 sm:grid-cols-2 sm:divide-x">
                        <div className=" sm:py-10 py-7 sm:ml-0 ml-14 w-2/3 px-6 sm:px-6 bg-slate-200 rounded">
                            <div className='border-b-2 border-gray-500'>
                                <h1 className='flex items-center text-2xl text-slate-600 font-bold'><GrLocation className='bg-red-500 rounded p-1 text-4xl mr-3'/>Visit Office</h1>
                                <p className='py-4 text-base font-medium'>69 Andy Street, Madison
                                    <br />
                                    New Jersey - 45369
                                </p>
                            </div>                            
                            <div className='border-b-2 py-8 border-gray-500'>
                                <h1 className='flex items-center text-2xl text-slate-600 font-bold'><GrPhone className='bg-red-500 rounded p-1 text-4xl mr-3'/>Phone</h1>
                                <a href="tel:+"><h1 className='py-4 text-base font-medium'> Support +1 700 996 1634 <br /> Events +1 800 844 1600 </h1></a>
                            </div>                            
                            <div className='border-b-2 py-5 border-gray-500 hover:border-red-500 duration-500'>
                                <h1 className='flex items-center text-2xl text-slate-600 font-bold'><GrMail className='bg-red-500 rounded p-1 text-4xl mr-3'/>Email</h1>
                                <a href="mailto:"> <h1 className='py-4 text-base font-medium'>jagowelfare@gmail.com <br /> jagosupport@org.com</h1></a>
                            </div>                            
                        </div>
                        <form className="pt-16 space-y-6 sm:px-6 bg-zinc-100 sm:w-max px-6 rounded">
                            <div className="sm:flex sm:space-x-6">
                                <div className="sm:w-72">
                                <label className="block py-2">
                                    <span className="py-1">Full name</span>
                                    <input
                                    type="text"
                                    placeholder="Leroy Jenkins"
                                    className="block p-3 w-full sm:w-72 rounded-sm shadow-sm  focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <span className="py-1">Email address</span>
                                    <input
                                    type="email"
                                    placeholder="leroy@jenkins.com"
                                    className="block p-3 w-full sm:w-72 rounded-sm shadow-sm focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                            </div>
                            <div className="sm:flex sm:space-x-6">
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <span className="py-1">Phone</span>
                                    <input
                                    type="text"
                                    placeholder="Phone"
                                    className="block p-3 w-full sm:w-72 rounded-sm shadow-sm focus:ring dark:bg-gray-800"
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <span className="py-1">Subject</span>
                                    <input
                                    type="text"
                                    placeholder="Subject"
                                    className="block p-3 w-full sm:w-72 rounded-sm shadow-sm  focus:ring dark-bg-gray-800"
                                    />
                                </label>
                                </div>
                            </div>
                            <label className="block">
                                <span className="py-1">Message</span>
                                <textarea
                                rows="3"
                                className="block w-full rounded-sm focus:ring  dark:bg-gray-800"
                                ></textarea>
                            </label>
                            <span className='flex justify-center pt-5 sm:pb-0 pb-5 text-sm font-semibold text-gray-700 '>
                                <Link className=''>
                                    <button type='submit' className='px-7 flex items-center py-3 rounded-xl text-white text-lg bg-red-600 hover:bg-slate-700 duration-700 font-semibold'><BsFillCheckCircleFill className='mr-2'/>Send Message</button>
                                </Link>
                            </span>
                        </form>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;