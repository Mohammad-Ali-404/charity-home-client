/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Container from '../Shared/Container/Container';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Donate from '../Home/Home/Donate/Donate';

const Team = () => {
    const [axiosSecure] = useAxiosSecure();
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axiosSecure.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/volunteer`);
                setTeam(response.data);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchTeamData();
    }, [axiosSecure]);

    const volunteerTeam = team.filter((teamMember) => teamMember.title === 'Volunteer');
    const founderTeam = team.filter((teamMember) => teamMember.title !== 'Volunteer');

    

    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Simple Giving | Our Team</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Our Team' subHeading="Meet the Team" />
            <div className='text-center py-10'>
                <h1 className='text-4xl text-red-500 font-semibold title '>Ready to Help</h1>
                <h1 className='text-4xl text-slate-800 font-semibold'>We have thousands of happy <br /><span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>volunteer</span> to help you
                </h1>
            </div>
            <Container>
                    <div className="sm:grid sm:grid-cols-4 sm:gap-10 pt-10">
                        {founderTeam.map((teamMember, index) => (
                            <div key={index} className="relative py-5 sm:py-0 group flex flex-col justify-center sm:max-w-sm shadow-md rounded-xl dark:bg-gray-900 dark:text-gray-100">
                            <div className="relative group overflow-hidden">
                                <img
                                    src={teamMember.image}
                                    alt=""
                                    className="w-full h-96 px-3 rounded-xl py-2 transition-transform duration-1000 ease-in-out transform group-hover:translate-y-0"
                                />
                                <div className="absolute inset-0 bg-zinc-900 opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-75"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0  group-hover:opacity-100 transition-opacity duration-1000">
                                <div className="flex justify-center text-3xl text-white space-x-4 mt-52">
                                <Link target="_blank" to={teamMember.facebook}>
                                    <AiFillFacebook className="hover:text-red-600 duration-300 rounded-xl" />
                                </Link>
                                <Link target="_blank" to={teamMember.twitter}>
                                    <AiFillTwitterSquare className="hover:text-red-600 duration-300 rounded-xl" />
                                </Link>
                                <Link target="_blank" to={teamMember.instagram}>
                                    <AiOutlineInstagram className="hover:text-red-600 duration-300 rounded-xl" />
                                </Link>
                                <Link target="_blank" to={teamMember.linkedIn}>
                                    <AiFillLinkedin className="hover:text-red-600 duration-300 rounded-xl" />
                                </Link>
                                </div>
                            </div>
                            <div className="space-y-4 text-center divide-y dark:divide-gray-700 sm:px-12 p-6">
                                <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{teamMember.title}</h2>
                                <p className="px-5 text-xs sm:text-base dark:text-gray-400">{teamMember.name}</p>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    </Container>
                        <div className='py-14'>
                            <Donate/>
                        </div>
                    <Container>
                        <div className='sm:grid sm:grid-cols-4 sm:gap-5'>
                            {volunteerTeam.map((teamMember, index) => (
                                <div key={index} className="relative flex flex-col justify-center max-w-xs p-6 sm:px-12">
                                    <div className=''>
                                        <img
                                        src={teamMember.image}
                                        alt=""
                                        className="w-40  h-40 mx-auto rounded-full aspect-square"
                                        />
                                    </div>
                                    <div className="space-y-4 text-center divide-y">
                                    <div className="my-2 space-y-1 py-4">
                                        <h2 className="text-xl font-semibold sm:text-2xl">{teamMember.name}</h2>
                                        <p className="px-5 text-xs sm:text-base">{teamMember.title}</p>
                                    </div>
                                    <div className="flex justify-center pt-2 space-x-4 align-center">
                                        {/* Add a wrapper div for social icons */}
                                        <div className="text-3xl text-gray-700  pb-20 gap-2 social-icons-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity  duration-1000 hover:opacity-100">
                                            <Link target="_blank" to={teamMember.facebook}>
                                                <AiFillFacebook className="hover:text-red-600 duration-300 rounded-xl" />
                                            </Link>
                                            <Link target="_blank" to={teamMember.twitter}>
                                                <AiFillTwitterSquare className="hover:text-red-600 duration-300 rounded-xl" />
                                            </Link>
                                            <Link target="_blank" to={teamMember.instagram}>
                                                <AiOutlineInstagram className="hover:text-red-600 duration-300 rounded-xl" />
                                            </Link>
                                            <Link target="_blank" to={teamMember.linkedIn}>
                                                <AiFillLinkedin className="hover:text-red-600 duration-300 rounded-xl" />
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
        </div>
    );
};

export default Team;
