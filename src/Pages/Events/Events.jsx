import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
// import Container from '../Shared/Container/Container';
import UpcomingEvents from '../Home/Home/UpcomingEvents/UpcomingEvents';

const Events = () => {
    return (
        <div>
            <div>
                <PageTitle heading='Events' subHeading='Events'/>
                <UpcomingEvents/>
            </div>
        </div>
    );
};

export default Events;