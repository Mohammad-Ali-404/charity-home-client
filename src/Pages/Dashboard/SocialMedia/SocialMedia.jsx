import React from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { BiLinkAlt } from 'react-icons/bi';
import DashboardTitle from '../Shared/DashboardTitle';
import SocialMediaForm from './SocialMediaForm';

const SocialMedia = () => {
    return (
        <div className="min-h-screen dark:bg-gray-700 dark:text-white p-6">
            <div className='py-8'>
                <DashboardTitle title="Social Media Link" subTitle="Manage all your social media link" />
            </div>
            <div className="dark:bg-gray-800  bg-white ">
                <div className="p-10">
                    <h2 className="text-lg font-semibold dark:text-white text-gray-600 mb-10">
                        Post blog
                    </h2>
                    <div>
                        <div className="dark:bg-gray-800 dark:text-white grid gap-5 lg:flex items-center lg:gap-20">
                            <div className="text-2xl flex items-center gap-5">
                                <div className="dark:bg-gray-800 dark:text-white bg-red-50 text-red-700 p-5 rounded-full">
                                    <BiLinkAlt className="sm:text-5xl text-2xl" />
                                </div>
                                <h2>Social Media</h2>
                            </div>
                            <div className="text-2xl flex items-center gap-5">
                                <div className="dark:bg-gray-800 dark:text-white bg-red-50 text-red-700 p-5 rounded-full">
                                    <GiConfirmed className=" sm:text-5xl text-2xl" />
                                </div>
                                <h2>Confirmation</h2>
                            </div>
                        </div>
                    </div>
                    <SocialMediaForm/>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;