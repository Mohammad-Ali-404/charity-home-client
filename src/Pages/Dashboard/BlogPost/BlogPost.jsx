import React from 'react';
import DashboardTitle from '../Shared/DashboardTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const BlogPost = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) =>{
      try {
        const response = await axiosSecure.post(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/blogs`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (response.status === 200) {
            reset()
            Swal.fire({
              title: 'Success!',
              text: 'Post a new Successfully',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
            // Optionally, you can redirect the user or show a success message
          } else {
            console.error('Error updating causes');
            Swal.fire({
              title: 'Error',
              text: 'Failed to post new blog. Please try again.',
              icon: 'error',
              confirmButtonText: 'Okay',
            });
            // Handle error, show error message, etc.
          }
        } catch (error) {
          console.error('Error updating causes:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to post new blog. Please try again.',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
          // Handle error, show error message, etc.
        }
    }
    return (
        <div>
            <div className='pt-10'>
                <DashboardTitle title='Added Causes' subTitle="Added Create daily new causes"/>
            </div>
            <div className='bg-white p-8 rounded-xl mt-10'>
            <h1 className='text-2xl font-semibold text-center'>Single Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)} className=' bg-white p-8 rounded-xl'>
                    <div className="mb-4">
                        <label htmlFor="image"  className='block mb-1 sm:text-base text-sm'>
                            Added Photo
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="block w-full border dark:border-gray-500 text-gray-500
                                file:mr-4 file:py-4 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-gray-200 file:text-gray-700 dark:file:bg-gray-700 dark:file:text-gray-200
                                hover:file:bg-gray-100
                            "
                            {...register("image", {
                            required: "Please upload an image",
                            })}
                        />
                        {errors?.image && (
                            <span className="text-red-500">{errors?.image.message}</span>
                        )}
                    </div>
                    <div className="sm:grid sm:grid-cols-2 gap-5">
                        <div className="mb-4">
                            <label htmlFor="title" className='sm:text-base text-sm'>Blog Title</label>
                            <input
                            type="text"
                            id="title"
                            placeholder="Title"
                            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none dark:bg-gray-700 dark:border-gray-500"
                            {...register("title")}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className='sm:text-base text-sm'>Date</label>
                            <input
                            type="date"
                            id="date"
                            name="date"
                            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
                            {...register("date")}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className='sm:text-base text-sm'>Blog Description</label>
                            <textarea
                            id="description"
                            name="description"
                            placeholder="Blog description"
                            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none "
                            {...register("short_description")}
                            />
                        </div>
                    </div>
                    <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Save Causes
        </button>
                </form>
            </div>
        </div>
    );
};

export default BlogPost;