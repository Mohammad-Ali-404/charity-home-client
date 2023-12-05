import React from 'react';
import DashboardTitle from '../Shared/DashboardTitle';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddedVolunteer = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset , formState: { errors }, } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = async (data) =>{
      const formData = new FormData()
      formData.append('image', data.image[0])
      fetch(img_hosting_url, {
        method:'POST',
        body:formData
      })
      .then(res => res.json())
      .then(imgRes =>{
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const {name, title, details, facebook, twitter, instagram, linkedin} = data;
          const volunteerData = {name, title, details, facebook, twitter, instagram, linkedin, image:imgURL}
          axiosSecure.post(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/volunteer`, volunteerData)
          .then(data=>{
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                title: 'Success!',
                text: 'Volunteer added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool',
              });
            }
          })
        }
      })
      }
    return (
       <div>
         <div className='pt-10'>
            <DashboardTitle title="Added Volunteer" subTitle="Ready to Jump!"/>
        </div>
        <div className='mt-10 bg-white p-8 rounded-xl'>
            <form onSubmit={handleSubmit(onSubmit)} className=' bg-white p-8 rounded-xl'>
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-1">
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
                <div className="sm:grid sm:grid-cols-2 gap-10">
                    <div className="mb-4">
                        <label htmlFor="Name">Name</label>
                        <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none dark:bg-gray-700 dark:border-gray-500"
                        {...register("name",)}
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="Title">Title</label>
                        <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none dark:bg-gray-700 dark:border-gray-500"
                        {...register("title",)}
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="details">Volunteer Details</label>
                        <input
                        id="details"
                        name="details"
                        placeholder='details'
                        className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none "
                        {...register("details")}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title">Facebook link</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter link"
                            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            name="facebook"
                            {...register("facebook")}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title">Twitter link</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter link"
                            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            name="twitter"
                            {...register("twitter")}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title">Instagram link</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter link"
                            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            name="instagram"    
                            {...register("instagram")}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="title">Linkedin link</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter link"
                            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            name="linkedin"
                            {...register("linkedin")}
                        />
                    </div>
                </div>
                <button className="bg-primary sm:px-10 sm:py-3 py-1 px-3  sm:text-lg text-sm sm:font-semibold rounded-md text-gray-50 mt-10" type="submit">Added Volunteer</button>
            </form>
        </div>
       </div>
    );
};

export default AddedVolunteer;