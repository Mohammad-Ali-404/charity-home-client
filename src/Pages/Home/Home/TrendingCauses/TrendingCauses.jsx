import React, { useEffect, useState } from 'react';
import Container from '../../../Shared/Container/Container';
import '../HelpWithEducation/HelpWithEducation.css'
import './TrendingCauses.css'
import SingleTrendingCauses from './SingleTrendingCauses';
const TrendingCauses = () => {
    const [trendingCauses, SetTrendingCauses] = useState([])
    useEffect(() => {
        fetch('trendingCauses.json')
        .then(res => res.json())
        .then(data => SetTrendingCauses(data))
    },[])
    return (
        <div className='bg-no-repeat w-auto bg-zinc-200' style={{ backgroundImage: 'url(https://i.ibb.co/nsWXChT/1111319254.jp)', backgroundSize:'cover'}}>
            <Container>
                <div className='text-center'>
                    <h1 className='title text-red-600 font-light text-3xl bg-no-repeat py-6' style={{ backgroundImage: 'url(https://i.ibb.co/xCFMcQr/loveicon-2.png)', backgroundPosition:'center' }}>We Change Your Life & World</h1>
                    <h1 className='sm:text-5xl text-3xl font-bold text-slate-800'>Appeals & Donations</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-4 mt-10 pb-12'> 
                {trendingCauses.slice(0, 4).map((causes) => (
                        <SingleTrendingCauses key={causes.id} causes={causes} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default TrendingCauses;