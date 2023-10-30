import React from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    return (
        <div className=''>
            <div className='-mt-2'>
                <div className="hero h-[500px]  w-full" style={{backgroundImage: 'url(https://i.ibb.co/NxZMJTP/cover.jpg)'}}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="text-center">
                        <h1 className='md:text-2xl text-xl font-bold  text-white'>We are here to stop poverty</h1>
                        <h1 className='md:text-4xl text-2xl font-bold text-slate-100 mb-4'>We are fundraising for the <span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>people</span> who <br /> are fighting against poverty</h1>
                        <Link>
                            <button className='px-8 py-3 rounded-xl text-white text-lg bg-red-600 hover:bg-slate-700 duration-700 font-semibold'>Donate Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;