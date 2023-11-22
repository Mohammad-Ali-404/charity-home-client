import React from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import { FcFaq } from "react-icons/fc";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import Container from '../Container/Container';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
import ProfileDropdown from '../../../components/ProfileDropdown';
const Navbar = () => {
    
    const navbar = 
        <>
            <Link to='/'><li><a>Home</a></li></Link>
            <Link to='causes'><li><a>Causes</a></li></Link>
            <Link to='news'><li><a>News</a></li></Link>
            <Link to='events'><li><a>Events</a></li></Link>
            <Link to='contact'><li><a>Contact</a></li></Link>
        </>
            const { user } = useContext(AuthContext);
            // const handleLogout = () => {
            //   logOut()
            //     .then()
            //     .catch(error => console.log(error))
            // }
    return (
            <header className="bg-slate-100">
               <Container>
               <div className='border-b-2 p-4 hidden lg:flex lg:justify-between sm:col-auto '>
                    <div className='flex flex-col md:flex-row'>
                        <Link><h1 className='border-r-2 px-2 flex hover:text-red-600 duration-300'><AiOutlineMail className='mt-1 text-xl mr-1'/>simplegiving@gmail.com</h1></Link>
                        <Link><h1 className='flex border-r-2 px-2 hover:text-red-600 duration-300'> <BsTelephone className='text-xl mt-1'/> +12345565</h1></Link>
                        <Link><h1 className='ml-4 flex hover:text-red-600 duration-300'> <FcFaq className='mt-1 text-xl mr-1'/>Faqs</h1></Link>
                    </div>
                    <div className='px-20'>
                        <Marquee>
                           <span className='bg-sky-400 text-white p-2 mr-4'>Promo</span> All information available in the news
                        </Marquee>
                    </div>
                    <div className='flex gap-2 text-2xl mr-32 sm:justify-items-center'>
                        <Link><AiFillFacebook className=' hover:text-red-600 duration-300 rounded-xl'/></Link>
                        <Link><AiFillTwitterSquare  className=' hover:text-red-600 duration-300 rounded-xl'/></Link>
                        <Link><AiOutlineInstagram  className=' hover:text-red-600 duration-300 rounded-xl'/></Link>
                        <Link><AiFillLinkedin  className=' hover:text-red-600 duration-300 rounded-xl'/></Link>
                    </div>
                </div>
               <div className="navbar  p-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                        </div>
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navbar}
                        </ul>
                    </div>
                        <div className="navbar-end">
                                {user ? (
                                    <div className='z-10 inset-0'>
                                        <ProfileDropdown/>
                                    </div>
                                    ) : (
                                        <div>
                                            <Link to='donation' className="self-center px-2 sm:px-5 sm:text-base text-xs text-black py-2 sm:py-3 font-semibold hover:text-white bg-white sm:rounded-xl rounded-lg shadow hover:bg-[#e03c33] transition-colors duration-500 hover:border-[#e03c33] border-[#e03c33] border mr-4">Donate Now</Link>
                                            
                                        </div>
                                )}
                        </div>
                    </div>
               </Container>
            </header>
    );
};

export default Navbar;