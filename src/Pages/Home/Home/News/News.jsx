import React from 'react';
import Container from '../../../Shared/Container/Container';
import useNews from '../../../../Hooks/UseNews';

const News = () => {
    const [news] = useNews();
    const exclusiveNews = news.filter(item => item.category === 'Exclusive')
    const latestNews = news.filter(item => item.category === 'Latest')
    return (
        <div className=' bg-slate-100'>
            <Container>
            <div className='text-center sm:py-10 py-6'>
                    <h1 className='title text-3xl sm:text-4xl font-semibold text-red-600'>Upcoming Events</h1>
                    <h1 className='heading text-2xl sm:text-4xl'>Check all <span className='bg-no-repeat' style={{ backgroundImage: 'url(https://i.ibb.co/dWGJ3L2/yellow-banner.png)', backgroundSize: '100% 40%', backgroundPosition: 'bottom', display: 'inline', lineHeight: '1', }}>our latest</span> news and  <br />updates</h1>
                </div>
                <div>
                <section className="px-5 py-10 text-gray-800">
                    <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">

                        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                            <div className="flex flex-col space-y-8 md:space-y-12">
                                {
                                    exclusiveNews.map((news) => (
                                        <div key={news.id}>
                                            <div className="flex flex-col space-y-2">
                                                <h3 className="flex items-center space-x-2 text-gray-400">
                                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-red-500"></span>
                                                    <span className="text-xs font-bold tracki uppercase">{news.category}</span>
                                                </h3>
                                                <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{news.title}</a>
                                                <p className="text-xs text-gray-400">{news.date} - {news.posted_time} by
                                                    <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-400"> {news.reporter_name}</a>
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex flex-col w-full space-y-2">
                                <div className="flex w-full h-1 bg-opacity-10 bg-violet-400">
                                    <div className="w-1/2 h-full bg-red-400"></div>
                                </div>
                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
                                    <span className="text-xs font-bold tracki uppercase">See more exclusives</span>
                                    <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-red-400">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96" style={{backgroundImage: 'url(https://source.unsplash.com/random/239x319)'}}>
                            <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-red-400 text-gray-100">paris, france</span>
                            <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900">
                                <span className="flex items-center mb-4 space-x-2 text-red-400">
                                    <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-red-400">
                                        <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-red-400"></span>
                                    </span>
                                    <span className="text-sm font-bold">Live</span>
                                </span>
                                <h1 rel="noopener noreferrer" href="#" className="font-serif text-2xl font-semibold group-hover:underline text-gray-100">Community Unites in a Remarkable Display of Compassion and Generosity, Rallying Behind Local Charities to Transform Lives and Uplift the Less Fortunate</h1>
                            </a>
                        </div>

                        
                        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                            <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-400">
                                <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-400">Latest</button>
                            </div>
                            <div className="flex flex-col divide-y divide-gray-700">
                            {
                                    latestNews.map((news) => (
                                        <div key={news.id}>
                                           <div className="flex px-1 py-4">
                                                <img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src={news.image} />
                                                <div className="flex flex-col flex-grow">
                                                    <a rel="noopener noreferrer" href="#" className="font-serif hover:underline">{news.title}</a>
                                                    <p className="mt-auto text-xs text-gray-400">{news.posted_time}
                                                        <a rel="noopener noreferrer" href="#" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">{news.news_topic}</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </Container>
        </div>
    );
};

export default News;