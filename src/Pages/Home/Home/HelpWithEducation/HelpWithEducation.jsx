import React from 'react';
import './HelpWithEducation.css'
import Container from '../../../Shared/Container/Container';
import world from '../../../../assets/image/world.png';
import dollar from '../../../../assets/image/doller.png';
import education from '../../../../assets/image/about-style2_image1.jpg';

const HelpWithEducation = () => {
    return (
       <div className='bg-slate-50'>
             <Container>
            <div className='grid grid-cols-1 mt-20 sm:grid-cols-2 sm:py-16'>
                <div className='sm:w-full'>
                    <div className="bg-no-repeat opacity-90" style={{ backgroundImage: '' }}>
                        <div className="hero-overlay "></div>
                        <div className="hero-content ">
                            <div className="">
                                <h1 className="mb-3 sm:mb-5 text-red-600 font-semibold text-2xl sm:text-5xl featured">Help With Featured Cause</h1>
                                <h1 className='text-black text-2xl sm:text-5xl my-4 sm:my-7 font-bold font-serif'>Educate Children In 
                                    Rural Areas Our Priority</h1>
                                <p className="mb-3 text-base sm:text-base w-auto sm:my-6 my-4">Ever since I was a little kid in primary school I’ve watched kids slip through the cracks and fall out of the education system due to poverty. That’s why education is our first priority.</p>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className='flex sm:border-r-2 '>
                                        <img src={world} alt="World" className='px-2 my-4 sm:my-2' />
                                        <div className=' mt-6 sm:m-0 '>
                                            <h1 className='text-2xl sm:text-6xl font-bold text-[#fcb900]'>1.8K</h1>
                                            <h1 className='text-[#000] text-base sm:text-lg font-semibold'>Finished Project</h1>
                                        </div>
                                    </div>
                                    <div className='sm:w-80 px-2 sm:px-8'>
                                        <h1 className='text-sm sm:text-base'>We have already built 1.3k schools all over the world to educate children.</h1>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-10'>
                                    <div className='flex sm:border-r-2'>
                                        <img src={dollar} alt="Dollar" className='px-2 my-4 sm:my-2' />
                                        <div className=' mt-6 sm:mt-0'>
                                            <h1 className='text-2xl sm:text-6xl font-bold font-serif text-[#d84040]'>5m</h1>
                                            <h1 className='text-[#000] text-base sm:text-lg font-semibold'>Donated Money</h1>
                                        </div>
                                    </div>
                                    <div className='sm:w-72 w-80 px-2 sm:px-8'>
                                        <h1 className='text-sm sm:text-base'>Donate money to build more schools and help to educate them.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:px-36 sm:py-10'>
                    <img src={education} alt="Education" />
                </div>
            </div>
        </Container>
       </div>
    );
};

export default HelpWithEducation;