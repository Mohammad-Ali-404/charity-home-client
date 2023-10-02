import React from 'react';
import image1 from '../../../../assets/banner/book.png'
import image2 from '../../../../assets/banner/paint.png'
import image3 from '../../../../assets/banner/heart.png'
import image4 from '../../../../assets/banner/restaurant.png'
import round1 from '../../../../assets/banner/round.png'
import Container from '../../../Shared/Container/Container';
import { Link } from 'react-router-dom';
const DonationCategory = () => {
    return (
       <div className=''>
        <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  sm:gap-3 md:gap-4'>
            <div className='lg:my-0 my-14'>
                <div className="max-w-lg p-6 rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-50 bg-[#cae4f7] sm:mt-16">
                <img alt="" className="mx-auto -mt-20  w-40 h-40 rounded-full ri ri bg-gray-500 ri ri" src={image1} />
                   <div className='flex px-5'>
                   <div className="mt-6 mb-2">
                        <span className="block text-xl font-medium tracki  dark:text-violet-400">Donate For</span>
                        <h2 className="text-2xl mb-4 font-semibold tracki">Children education</h2>
                        <Link className='text-red-700 text-xl hover:text-slate-800'>More Details....</Link>
                    </div>
                    <img className='w-24 h-24 mt-10 ml-1' src={round1} alt="" />
                   </div>
                </div>
            </div>
            <div className='lg:my-0 my-14'>
                <div className="max-w-lg p-6 rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-50 bg-[#fdf0dd] sm:mt-16">
                <img alt="" className="mx-auto -mt-20 w-40 h-40 rounded-full ri ri bg-gray-500 ri ri" src={image2} />
                   <div className='flex px-5'>
                   <div className="mt-6 mb-2">
                        <span className="block text-xl font-medium tracki  dark:text-violet-400">Donate For</span>
                        <h2 className="text-2xl mb-4 font-semibold tracki">Clean mineral water</h2>
                        <Link className='text-red-700 text-xl hover:text-slate-800'>More Details....</Link>
                    </div>
                    <img className='w-24 h-24 mt-10 ml-1' src={round1} alt="" />
                   </div>
                </div>
            </div>
            <div>
                <div className='lg:my-0 my-14'>
                    <div className="max-w-lg p-6  rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-50 bg-[#d2f4f4] sm:mt-16">
                    <img alt="" className="mx-auto -mt-20  w-40 h-40 rounded-full ri ri bg-gray-500 ri ri" src={image3} />
                    <div className='flex px-5'>
                    <div className="mt-6 mb-2">
                            <span className="block text-xl font-medium tracki  dark:text-violet-400">Donate For</span>
                            <h2 className="text-2xl mb-4 font-semibold tracki">Surgery & treatment</h2>
                            <Link className='text-red-700 text-xl hover:text-slate-800'>More Details....</Link>
                        </div>
                        <img className='w-24 h-24 mt-10 ml-1' src={round1} alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='lg:my-0 my-14'>
                    <div className="max-w-lg p-6  rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-50 bg-[#e0eafd] sm:mt-16">
                    <img alt="" className="mx-auto -mt-20 w-40 h-40 rounded-full ri ri bg-gray-500 ri ri" src={image4} />
                    <div className='flex px-5'>
                    <div className="mt-6 mb-2">
                            <span className="block text-xl font-medium tracki  dark:text-violet-400">Donate For</span>
                            <h2 className="text-2xl mb-4 font-semibold tracki">Healthy & good food</h2>
                            <Link className='text-red-700 text-xl hover:text-slate-800'>More Details....</Link>
                        </div>
                        <img className='w-24 h-24 mt-10 ml-1' src={round1} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
       </div>
    );
};

export default DonationCategory;