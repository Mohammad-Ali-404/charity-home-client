import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import News from '../Home/Home/News/News';

const AllNews = () => {
    return (
        <div>
            <PageTitle heading='News' subHeading='News' />
            <News/>
        </div>
    );
};

export default AllNews;