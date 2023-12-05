import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SingleBlog from './SingleBlog';
import Container from '../Shared/Container/Container';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blog = () => {
    const [axiosSecure] = useAxiosSecure();
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axiosSecure.get(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/blogs`);
                const data = response.data;
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, [axiosSecure]);

    return (
        <div>
             <HelmetProvider>
                <Helmet><title>Simple Giving | Blog</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Blogs' subHeading='Blogs'/>
           <Container>
           <div className='flex'>
            <div className='w-7/12 bg-gray-50 px-10 py-10 rounded-sm'>
                {
                blogs && blogs.map((blog) => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)
                }
            </div>
            <div>
                
            </div>
           </div>
           </Container>
        </div>
    );
};

export default Blog;
