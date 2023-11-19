import React from 'react';
import Container from '../Shared/Container/Container';
import PageTitle from '../Shared/PageTitle/PageTitle';
import useTrendingCauses from '../../Hooks/useTrendingCauses';
import SingleCauses from './SingleCauses';
import '../Home/Home.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Causes = () => {
    const [trendingCauses] = useTrendingCauses();
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Simple Giving | Causes</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Causes' subHeading='Causes'/>
            <Container>
                <div className='text-center py-10'>
                    <h1 className='text-4xl text-red-500 font-semibold title '>Trending Causes</h1>
                    <h1 className='text-4xl text-slate-800 font-semibold'>We are always where other people <br /> <span className='bg-no-repeat' style={{backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition:'bottom', display: 'inline', lineHeight: '1', }}>need</span>  help</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 mt-10 pb-12'>
                    {trendingCauses.map((causes) => (
                        <SingleCauses key={causes.id} causes={causes} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Causes;