import React from 'react';
import Banner from './Home/Banner';
import DonationCategory from './Home/DonationCategory/DonationCategory';
import HelpWithEducation from './Home/HelpWithEducation/HelpWithEducation';
import TrendingCauses from './Home/TrendingCauses/TrendingCauses';

const Home = () => {
    return (
        <div>
            <Banner/>
            <DonationCategory/>
            <HelpWithEducation/>
            <TrendingCauses/>
        </div>
    );
};

export default Home;