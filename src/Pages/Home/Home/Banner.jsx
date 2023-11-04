import React from 'react';
import banner from '../../../assets/banner/banner.png'
import Container from '../../Shared/Container/Container';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='bg-slate-200'>
           <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mb-10 items-center md:min-h-[calc(100vh-60px)]">
                <div className="flex flex-col h-full justify-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/YZrtCCL/about-style1-content-box-map.png)' }}>
                    <h1 className="md:text-3xl lg:text-5xl space-x-3 font-bold text-2xl py-10 md:mt-4 dark:text-slate-200 text-slate-700">
                    <span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>Empowering</span>  Communities Through Sustainable Charity Initiatives                  </h1>
                    <p className="md:my-2 text-xl font-serif pb-6">
                    Now his charitable donations run into millions. The easiest way to make regular charitable donations is payroll giving. He would be worth more but for large donations to charity. She and her family are now reliant on food donations.</p>
                    <Link to='donation' className="self-center px-4 sm:px-12 text-black py-2 sm:py-3 font-semibold hover:text-white bg-slate-200 rounded-xl shadow hover:bg-[#e03c33] transition-colors duration-500 hover:border-[#e03c33] border-[#e03c33] border mr-4">Donate Now</Link>
                </div>
                <img className='px-16' src={banner} alt="" />
          </div>
           </Container>
        </div>
    );
};

export default Banner;