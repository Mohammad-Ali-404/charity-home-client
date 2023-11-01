import React from 'react';
import Banner from './Home/Banner';
import DonationCategory from './Home/DonationCategory/DonationCategory';
import HelpWithEducation from './Home/HelpWithEducation/HelpWithEducation';
import TrendingCauses from './Home/TrendingCauses/TrendingCauses';
import UpcomingEvents from './Home/UpcomingEvents/UpcomingEvents';
import Donate from './Home/Donate/Donate';
import SponsorsAndFund from './Home/SponsorsAndFund/SponsorsAndFund';
import GetInTouch from './Home/GetInTouch/GetInTouch';
import News from './Home/News/News';

const Home = () => {
    return (
        <div>
            <Banner/>
            <DonationCategory/>
            <HelpWithEducation/>
            <TrendingCauses/>
            <UpcomingEvents/>
            <Donate/>
            <SponsorsAndFund/>
            <News/>
            <GetInTouch/>
        </div>
    );
};

export default Home;