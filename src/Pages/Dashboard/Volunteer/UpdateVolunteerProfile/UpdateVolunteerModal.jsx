/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateVolunteerProfile = ({singleVolunteerData, setIsUpdatVolunteerModalOpen}) => {
    console.log('volunteerid', singleVolunteerData)
    const [loading, setLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure()
    const closeVolunteerUpdateModal = () => {
        setIsUpdatVolunteerModalOpen(false);
      };
      const { register, handleSubmit, reset, formState: { errors }, } = useForm();
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
          axiosSecure.put(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/volunteer/${singleVolunteerData._id}`, volunteerData)
          .then(data=>{
            if (data.data.insertedId) {
                reset();
            }
          })
          .finally(() => {
            Swal.fire({
              title: 'Success!',
              text: 'Volunteer Profile Update Successfully',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
          })
        }
      })
      }
    return (
        <div>
             <div>
            <div>
                <div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black/20 bg-opacity-50 z-40 px-2 py-6 overflow-y-visible">
                    <div className="bg-white p-3 2xl:p-6 rounded-md">
                    <h2 className="text-lg 2xl:text-xl font-semibold mb-1 2xl:mb-2">
                        Update Volunteer profile
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="image" className="block mb-1">
                                Upload volunteer Photo
                            </label>
                            <input
                                type="file"
                                id="image"
                                className="block w-full border text-gray-500
                                    rounded-xl
                                file:mr-4 file:py-1 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                dark:file:bg-gray-400
                                file:bg-gray-200 file:text-gray-700
                                hover:file:bg-gray-100
                                "
                                {...register("image")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter title"
                                defaultValue={singleVolunteerData?.title || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("title")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter name"
                                defaultValue={singleVolunteerData?.name || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("name")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="details">Details</label>
                            <textarea
                            id="details"
                            name="details"
                            defaultValue={singleVolunteerData?.details}
                            className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            {...register("details")}
                            />
                        </div>
                        
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="facebook">Facebok</label>
                            <input
                                id="facebook"
                                placeholder="facebook Link"
                                defaultValue={singleVolunteerData?.facebook || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("facebook")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="twitter">Twitter</label>
                            <input
                                id="twitter"
                                placeholder="Twitter Link"
                                defaultValue={singleVolunteerData?.twitter || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("twitter")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="instagram">Instagram</label>
                            <input
                                id="instagram"
                                placeholder="instagram link"
                                defaultValue={singleVolunteerData?.instagram || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("instagram")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="linkedin">LinkedIn</label>
                            <input
                                id="linkedin"
                                placeholder="linkedin link"
                                defaultValue={singleVolunteerData?.linkedin || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("linkedin")}
                            />
                        </div>
                        
                        <button
                        className="bg-green-500 text-white px-4 py-1 2xl:py-2 rounded-md hover:bg-green-700 duration-500"
                        type="submit"
                        >
                        {loading ? "Updating..." : "Update"}
                        </button>
                        <button
                        onClick={closeVolunteerUpdateModal}
                        className="bg-red-500 text-white px-4 py-1 2xl:py-2 rounded-md ml-2 hover:bg-red-700 duration-500"
                        >
                        Cancel
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateVolunteerProfile;