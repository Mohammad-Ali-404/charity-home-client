import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const SingleBlog = ({ blog }) => {
    const { short_description, title, image, date } = blog;
    const maxDescriptionLength = 120; // You can adjust this value as needed

    return (
        <div>
            <div className="">
                <div className="card shadow-xl">
                    <div className="">
                        <img className='' src={image} alt="" />
                    </div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <div className="flex justify-start">
                            <span className="px-3 py-2 text-xs font-semibold rounded-full bg-red-500 text-lime-50">Charity</span>
                        </div>
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <p className="flex-1 pt-2">
                            {short_description.length > maxDescriptionLength
                                ? `${short_description.slice(0, maxDescriptionLength)}...`
                                : short_description
                            }
                            {short_description.length > maxDescriptionLength && (
                                <Link
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="btn ml-2 btn-xs bg-none inline-flex items-center text-sm text-red-500"
                                >
                                    <span className='text-xs'>Read more</span>
                                    <GoArrowRight className='text-xl'/>
                                </Link>
                            )}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <FaUserCircle className='text-2xl' />
                                <span className="self-center text-base font-semibold">By Admin</span>
                            </div>
                            <span className="text-xs">{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;
