import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardTitle from '../../Shared/DashboardTitle';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';

const ProfileEditForm = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/users-update`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Profile updated successfully!');
        // Optionally, you can redirect the user or show a success message
      } else {
        console.error('Error updating profile');
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error, show error message, etc.
    }
  };
  
    return (
        <div>
            
            <div className='mt-10'>
              <DashboardTitle
              title={"Update Admin Profile"}
              subTitle={"Ready to jump back in?"}
            />
            </div>
             <div className="mt-10">
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
            <label htmlFor="name">Admin name (optional)</label>
            <input
              type="text"
              id="adminName"
              placeholder="Enter name"
              
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none dark:bg-gray-700 dark:border-gray-500"
              {...register("adminName")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Email Address</label>
            <input
              type="email"
              id="email"
              disabled
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none cursor-not-allowed"
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Phone Number</label>
            <input
              type="text"
              id="number"
              placeholder="+88011888822"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("number")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Website</label>
            <input
              type="text"
              id="website"
              placeholder="Enter Website link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("website")}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description">About Admin</label>

          <textarea
            id="aboutAdmin"
            placeholder="Enter About Admin"
           
            className="w-full h-60 px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("aboutAdmin")}
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Facebook</label>
            <input
              type="text"
              id="facebook"
              placeholder="Enter Facebook Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("facebook")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Twitter</label>
            <input
              type="text"
              id="twitter"
              placeholder="Enter Twitter Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("twitter")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Linkedin</label>
            <input
              type="text"
              id="linkedin"
              placeholder="Enter Linkedin Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("linkedin")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Github</label>
            <input
              type="text"
              id="github"
              placeholder="Enter Github account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("github")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Country</label>

            <input
              type="text"
              id="country"
              placeholder="Enter country name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("country")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">City</label>

            <input
              type="text"
              id="city"
              placeholder="Enter city name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("city")}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name">Complete Address</label>

          <input
            type="text"
            id="address"
            placeholder="Enter address"
            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("address")}
          />
        </div>

        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Save Profile
        </button>
      </form>
    </div>
        </div>
    );
};

export default ProfileEditForm;