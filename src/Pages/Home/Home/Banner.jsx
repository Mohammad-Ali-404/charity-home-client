import React from 'react';
import banner from '../../../assets/banner/banner.png'
import Container from '../../Shared/Container/Container';
const Banner = () => {
    return (
        <div className='bg-slate-200'>
           <Container>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mb-10 items-center md:min-h-[calc(100vh-60px)]">
                <div className="flex flex-col h-full justify-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/YZrtCCL/about-style1-content-box-map.png)' }}>
                    <h1 className="md:text-3xl lg:text-6xl font-bold text-2xl py-10 md:mt-4 dark:text-slate-200 text-slate-700">
                    <span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>Share</span> your love to make someone’s life better                    </h1>
                    <p className="md:my-2 text-xl font-serif pb-6">
                    Now his charitable donations run into millions. The easiest way to make regular charitable donations is payroll giving. He would be worth more but for large donations to charity. She and her family are now reliant on food donations.                    </p>
                </div>
                <img className='px-16' src={banner} alt="" />
          </div>
           </Container>
        </div>
    );
};

export default Banner;