import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Container from '../../Shared/Container/Container';
import { useLoaderData } from 'react-router-dom';

const CausesDetails = () => {
    const causesDetail = useLoaderData();
    console.log(causesDetail)
    const {image, title, short_description, description, fact_title, more_description, donation_goal, donation_achieved , additional_images} = causesDetail;
    return (
        <div>
            <PageTitle heading='Causes Details' subHeading='Causes Details'/>
            <div>
                <Container>
                    <img src={image} alt="" />
                    <h1>{title}</h1>
                </Container>
            </div>
        </div>
    );
};

export default CausesDetails;