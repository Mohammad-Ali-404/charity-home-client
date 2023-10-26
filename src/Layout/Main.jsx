import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import SubscribeEmail from '../Pages/Shared/SubscribeEmail/SubscribeEmail';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <SubscribeEmail/>
            <Footer/>
        </div>
    );
};

export default Main;