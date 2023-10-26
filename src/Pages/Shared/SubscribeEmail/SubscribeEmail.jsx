import React from 'react';
import Container from '../Container/Container';
import '../../Home/Home.css'
import { BsFillSendFill } from "react-icons/bs";
const SubscribeEmail = () => {
    return (
        <div className='py-10' >
        <Container>
        <section className="py-6 card bg-slate-300 rounded shadow-2xl shadow-gray-500">
			<div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
				<div className="flex flex-col space-y-4 text-center lg:text-left">
					<h1 className="text-5xl text-red-600 font-semibold leadi title">Newsletter</h1>
					<p className="sm:text-3xl text-xl font-semibold">To get weekly & monthly news, <br /> <span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>Subscribe</span> to our newsletter.</p>
				</div>
				<div className="flex flex-col items-center sm:flex-row justify-center flex-shrink-0 lg:justify-end">
					<div className="flex flex-col sm:flex-row px-4 sm:px-10">
						<input
							type="text"
							placeholder="Your Email Address"
							className="w-full sm:w-96 sm:px-4 py-4 sm:py-0 rounded-l-lg sm:rounded-l-none"
						/>
						<button
							type="button"
							className="w-full sm:w-2/6 sm:p-3 p-2 flex items-center justify-center font-semibold rounded-r-lg sm:rounded-r-none sm:rounded-tr-lg bg-red-500 hover:bg-slate-700 duration-500 text-white"
						>
							<BsFillSendFill className='text-4xl px-2' />
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</section>
        </Container>
        </div>
    );
};

export default SubscribeEmail;