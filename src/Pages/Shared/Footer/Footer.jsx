/* eslint-disable no-unused-vars */
import Container from '../Container/Container';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
const Footer = () => {
  const [socialMedia, setSocialMedia] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [axiosSecure] = useAxiosSecure()
  useEffect(() => {
    const fetchSocialMedia = async () => {
      try {
        const response = await axiosSecure.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/social-media`);
        setSocialMedia(response.data);
      } catch (error) {
        setError('Error fetching payment history');
      } finally {
        setLoading(false);
      }
    };

    fetchSocialMedia();
  }, [axiosSecure]);
    return (
        <div className='bg-base-200 text-base-content'>
            <Container>
                <footer className="footer  p-10 ">
                    <aside>
                        <Link to='/'><img src={logo} alt="" /></Link>
                        <p className='text-base text-slate-800'>Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Eum excepturi, expedita<br /> perspiciatis autem  sunt facer.</p>
                        <h1 className='text-lg'><span className='font-semibold'>Address:</span> 858 Walnutwood Ave. Webster, <br /> NY 14580</h1>
                        <a href="mailto:"> <h1 className='text-lg'><span className='font-semibold'>Email:</span> simplegiving@gmail.com</h1></a>
                        <a href="tel:+"><h1 className='text-lg'><span className='font-semibold'>Phone:</span> +225 4455 6655</h1></a>
                    </aside> 
                    <nav>
                        <header className="footer-title text-black text-xl ">Quick links</header> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">About us</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Services</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Projects</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">News</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Career</Link> 
                        
                    </nav> 
                    <nav>
                    <header className="footer-title text-black text-xl ">Supports</header> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Help & Faq</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Causes</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Events</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Contact Us</Link> 
                        <Link className=" hover:text-red-500 font-normal text-lg duration-500 ">Terms and services</Link> 
                    </nav> 
                    <nav>
                    <header className="footer-title text-black text-xl ">Latest tweets</header> 
                        <Link><h1 className='text-lg text-red-500 hover:text-slate-700 duration-500'>#webdevelopment</h1></Link>
                        <p className='w-64'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae blanditiis, facere nulla consectetur nobis tempora cumque perspiciatis dolorum nesciunt debitis. </p>
                        <h1 className='text-lg font-bold'>December 13, 2021 04:20 PM</h1>
                    </nav>
                </footer>
            </Container>
            <div className='flex p-5 justify-between bg-red-500 text-white w-full'>
                <h1 className='sm:text-lg sm:px-12 pr-5 font-semibold'>Copyright © 2023 All Rights Reserved</h1>
                <div className=''>
                  {socialMedia.map((media) => (
                    <div key={media._id} className='flex gap-4 sm:text-2xl text-xl sm:px-48'>
                      <Link target='_blank' to={media.facebook}><AiFillFacebook/></Link>
                      <Link target='_blank' to={media.twitter}><AiFillTwitterSquare/></Link>
                      <Link target='_blank' to={media.instagram}><AiOutlineInstagram/></Link>
                      <Link target='_blank' to={media.linkedin}><AiFillLinkedin/></Link> 
                    </div>  
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;