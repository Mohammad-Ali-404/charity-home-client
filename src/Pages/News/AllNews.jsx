import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import News from '../Home/Home/News/News';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AllNews = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Simple Giving | News</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='News' subHeading='News' />
            <News/>
        </div>
    );
};

export default AllNews;