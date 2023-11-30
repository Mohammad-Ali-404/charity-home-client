import React from 'react';
import DashboardTitle from '../Shared/DashboardTitle';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddedCauses = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) =>{
      try {
        const response = await axios.post(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/causes`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (response.status === 200) {
          console.log('Added new causes successfully!');
          // Optionally, you can redirect the user or show a success message
        } else {
          console.error('Error adding causes');
          // Handle error, show error message, etc.
        }
      } catch (error) {
        console.error('Error adding causes:', error);
        // Handle error, show error message, etc.
      }
    }
    return (
        <div>
            <div className='pt-10'>
                <DashboardTitle title='Added Causes' subTitle="Added your daily new causes"/>
            </div>
            <div className='mt-10 bg-white p-8 rounded-xl'> 
            <form onSubmit={handleSubmit(onSubmit)} className=' bg-white p-8 rounded-xl'>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1">
            Change Photo
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
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="Title">Title (Causes title and and causes details title are same)</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none dark:bg-gray-700 dark:border-gray-500"
              {...register("title")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="short_description">Short Description</label>
            <input
               id="short_description"
               name="short_description"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none "
              {...register("short_description")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Category">Category</label>
            <input
                type="text"
                id="category"
                name="category"
                className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
                {...register("category")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("date")}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="donation_goal">Gonation Goal</label>
            <input
             type="number"
             id="donation_goal"
             name="donation_goal"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("donation_goal")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="donation_achived">Donation Achieved</label>
            <input
              type="number"
              id="donation_achived"
              name="donation_achived"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("donation_achived")}
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

export default AddedCauses;