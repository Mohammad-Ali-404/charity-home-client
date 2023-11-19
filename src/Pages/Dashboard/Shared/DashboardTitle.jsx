import React from 'react';

const DashboardTitle = ({title, subTitle}) => {
    return (
        <div className=''>
            <h2 className="sm:text-4xl text-3xl font-semibold font-sans mb-3">{title}</h2>
            <p className='text-lg font-medium'>{subTitle}</p>
        </div>
    );
};

export default DashboardTitle;