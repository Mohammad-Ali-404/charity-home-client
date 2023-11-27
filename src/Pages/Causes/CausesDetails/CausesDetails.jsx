import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Container from '../../Shared/Container/Container';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const CausesDetails = () => {
    const causes = useLoaderData();
    console.log(causes)
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Simple Giving | Causes Details</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Causes Details' subHeading='Causes Details'/>
            <div>
                <Container>
                    <img src={''} alt="" />
                    <h1>{''}</h1>
                </Container>
            </div>
        </div>
    );
};

export default CausesDetails;