import React from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { BsTelephone } from "react-icons/bs";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import Container from '../Container/Container';
const Navbar = () => {
    const navbar = 
        <><li><a>Home</a></li>
        <li><a>Causes</a></li>
        <li><a>News</a></li>
        <li><a>Events</a></li>
        <li><a>Contact</a></li></>
    
    return (
            <header className="bg-slate-100">
               <Container>
               <div className='border-b-2 p-4 lg:flex lg:justify-between sm:col-auto '>
                    <div className='flex sm:col-auto'>
                        <h1 className='border-r-2 px-2'>jagowelfare@gmail.com</h1>
                        <h1 className='flex border-r-2 px-2'> <BsTelephone className='text-xl mt-1'/> +12345565</h1>
                        <h1 className='ml-4'>Faqs</h1>
                    </div>
                    <div className='flex gap-2 text-xl mr-32 sm:justify-items-center'>
                        <AiFillFacebook/>
                        <AiFillTwitterSquare/>
                        <AiOutlineInstagram/>
                        <AiFillLinkedin/>
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
                        <Link className="self-center px-8 text-black py-3 font-semibold hover:text-white bg-white rounded-xl shadow hover:bg-[#e03c33] transition-colors duration-500 hover:border-[#e03c33] border-[#e03c33] border mr-4">Donate Now</Link>
                    </div>
                    </div>
               </Container>
            </header>
    );
};

export default Navbar;