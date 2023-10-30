import React from 'react';
import Container from '../../../Shared/Container/Container';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";
import '../../Home.css'
const GetInTouch = () => {
    return (
        <div className='py-10'>
           <Container>
                <div className=' text-center sm:text-start h-96 bg-no-repeat'style={{backgroundImage:'url(https://i.ibb.co/mGbbztp/thm-shape-8.png)'}}>
                   <div className='sm:flex justify-between w-full '>
                        <div>
                            <h1 className='title sm:text-5xl text-4xl font-semibold text-red-600'>Become Support Partner</h1>
                                <h1 className='sm:text-4xl text-3xl sm:w-4/5'>Provide financing support to <span className='bg-no-repeat' style={{ backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition: 'bottom', display: 'inline', lineHeight: '1', }}>help</span> individuals build livelihoods</h1>
                        </div>
                        <div className='sm:pl-0 pl-24 py-4'>
                            <Link className='sm:pr-32'>
                                <button className='px-11 flex items-center py-4 rounded-xl text-white text-lg bg-red-600 hover:bg-slate-700 duration-700 font-semibold'><BsFillCheckCircleFill className='mr-2'/>GET IN TOUCH</button>
                            </Link>
                        </div>
                   </div>
                
                </div>
           </Container>
        </div>
    );
};

export default GetInTouch;