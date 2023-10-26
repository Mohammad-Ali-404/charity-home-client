import React from 'react';
import Container from '../../../Shared/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img from '../../../../assets/image/sponsor-1.png';
import img2 from '../../../../assets/image/sponsor-2.png';
import img3 from '../../../../assets/image/sponsor-3.png';
import img4 from '../../../../assets/image/sponsor-4.png';
import img5 from '../../../../assets/image/sponsor-5.png';
import img6 from '../../../../assets/image/sponsor-6.png';
import img7 from '../../../../assets/image/sponsor-7.png';
import 'tailwindcss/tailwind.css'; // Import your Tailwind CSS styles
import camp1 from '../../../../assets/image/camp2.png'
import camp2 from '../../../../assets/image/hand.png'
import camp3 from '../../../../assets/image/mone.png'
import camp4 from '../../../../assets/image/camp.png'
import CountUp from 'react-countup';
const SponsorsAndFund = () => {
  return (
    <div className='py-20 bg-slate-50'>
      <Container>
        <div>
          <>
            <Swiper
              slidesPerView={5} // Default for small screens
              spaceBetween={25}
              pagination={{
                clickable: true,
              }}
             
            >
              <SwiperSlide><img src={img} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className='flex flex-col sm:flex-row gap-10 justify-between shadow-2xl shadow-gray-600 mt-16'>
  <div className='border-r-2 my-5 px-40 sm:px-32 row '>
    <img src={camp1} className='w-16 mx-auto' alt="" />
    <div>
      <span className='text-3xl font-semibold'>
        <CountUp start={0} end={55236} duration={2.75} />
      </span>
      <h1 className='sm:text-xl text-sm font-normal'>Total campaign</h1>
    </div>
  </div>
  <div className='border-r-2 my-5 px-40 sm:px-24 row'>
    <img src={camp2} className='w-16 mx-auto' alt="" />
    <div>
      <span className='text-3xl font-semibold'>
        <CountUp start={0} end={15750} duration={2.75} />
      </span>
      <h1 className='sm:text-xl text-sm font-normal'>Satisfied donors</h1>
    </div>
  </div>
  <div className='border-r-2 my-5 px-40 sm:px-36 row'>
    <img src={camp3} className='w-16 mx-auto' alt="" />
    <div>
      <span className='text-3xl font-semibold'>
        <CountUp start={0} end={256415} duration={2.75} />
      </span>
      <h1 className='sm:text-xl text-sm font-normal'>Fund raised</h1>
    </div>
  </div>
  <div className='my-5 px-40 sm:px-10 row'>
    <img src={camp4} className='w-16 mx-auto' alt="" />
    <div>
      <span className='text-3xl font-semibold'>
        <CountUp start={0} end={10250} duration={2.75} />
      </span>
      <h1 className='sm:text-xl text-sm font-normal'>Happy volunteers</h1>
    </div>
  </div>
</div>

      </Container>
    </div>
  );
};

export default SponsorsAndFund;
