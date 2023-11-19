import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import SubscribeEmail from '../Pages/Shared/SubscribeEmail/SubscribeEmail';
import { Heart } from 'react-spinners-css';

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
    return (
        <div>
            <div>
             {isLoading ? (
                <div className="flex justify-center items-center h-screen bg-slate-200">
                <Heart
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    color="#F55333"
                    />
                </div>
            ) : (
                <div>
                    <Navbar/>
                    <Outlet/>
                    <SubscribeEmail/>
                    <Footer/>
                </div>
            )}
                </div>    
        </div>
    );
};

export default Main;