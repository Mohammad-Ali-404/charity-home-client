import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
// import Container from '../Shared/Container/Container';
import UpcomingEvents from '../Home/Home/UpcomingEvents/UpcomingEvents';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Events = () => {
    return (
        <div>
            <div>
            <HelmetProvider>
                <Helmet><title>Simple Giving | Events</title></Helmet>
            </HelmetProvider>
                <PageTitle heading='Events' subHeading='Events'/>
                <UpcomingEvents/>
            </div>
        </div>
    );
};

export default Events;