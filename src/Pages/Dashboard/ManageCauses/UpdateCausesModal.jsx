// /* eslint-disable no-unused-vars */
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import React from 'react';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import {storage} from '../../../firebase/firebase.config'
// import { v4 } from 'uuid';
// import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
// const UpdateCausesModal = ({singleCausesData, setIsUpdateCausesModalOpen}) => {
//     console.log("singleCausesDataId", singleCausesData);
//     const [loading, setLoading] = useState(false);
//     const [axiosSecure] = useAxiosSecure()
//   const closeCausesUpdateModal = () => {
//     setIsUpdateCausesModalOpen(false);
//   };

//   const { register, handleSubmit } = useForm();
//   const queryClient = useQueryClient();

//   const updateCausesMutation = useMutation(
//     async (data) => {
//       setLoading(true);
//       const photoFile = data.image[0];
//       let downloadUrl = singleCausesData?.image;

//       if (photoFile) {
//         const photoRef = ref(storage, `causesImages/${photoFile.name + v4()}`);
//         await uploadBytes(photoRef, photoFile);
//         downloadUrl = await getDownloadURL(photoRef);
//       }

//       data.image = downloadUrl;
//       const response = await axiosSecure.put(
//         `${import.meta.env.VITE_VITE_SERVER_BASE_URL}/causes/${singleCausesData?._id}`,
//         data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to update a causes");
//       }

//       return response.json();
//     },
//     {
//       onSuccess: (data, variables, context) => {
//         queryClient.invalidateQueries("posts");
//         Swal.fire("Success", "Causes updated successfully", "success");
//         setLoading(false);
//         closeCausesUpdateModal();
//       },
//       onError: (error, variables, context) => {
//         Swal.fire("Error", "Failed to update Causes. Please try again.", "error");
//         setLoading(false);
//         closeCausesUpdateModal();
//       },
//     }
//   );

//   const onSubmit = async (data) => {
//     updateCausesMutation.mutate(data);
//   };

//     return (
//         <div>
//             <div>
//                 <div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black/20 bg-opacity-50 z-40 px-2 py-6 overflow-y-visible">
//                     <div className="bg-white p-3 2xl:p-6 rounded-md">
//                     <h2 className="text-lg 2xl:text-xl font-semibold mb-1 2xl:mb-2">
//                         Update Causes
//                     </h2>

//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="mb-1 2xl:mb-2">
//                             <label htmlFor="image" className="block mb-1">
//                                 Upload causes image
//                             </label>
//                             <input
//                                 type="file"
//                                 id="image"
//                                 className="block w-full border text-gray-500
//                                     rounded-xl
//                                 file:mr-4 file:py-1 file:px-4
//                                 file:rounded-md file:border-0
//                                 file:text-sm file:font-semibold
//                                 dark:file:bg-gray-400
//                                 file:bg-gray-200 file:text-gray-700
//                                 hover:file:bg-gray-100
//                                 "
//                                 {...register("image")}
//                             />
//                         </div>
//                         <div className="mb-1 2xl:mb-2">
//                             <label htmlFor="title">Causes Title</label>
//                             <input
//                                 type="text"
//                                 id="title"
//                                 placeholder="Enter title"
//                                 defaultValue={singleCausesData?.title || ""}
//                                 className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
//                                 {...register("title")}
//                             />
//                         </div>
//                         <div className="grid grid-cols-2 gap-10">
//                         <div className="mb-1 2xl:mb-2">
//                             <label htmlFor="writer">Category</label>
//                             <input
//                             type="text"
//                             id="category"
//                             placeholder="Category"
//                             defaultValue={singleCausesData?.category || ""}
//                             className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
//                             {...register("category")}
//                             />
//                         </div>
//                         <div className="mb-1 2xl:mb-2">
//                             <label htmlFor="Date">Date</label>
//                             <input
//                             type="date"
//                             id="date"
//                             placeholder="Enter Upload date"
//                             defaultValue={singleCausesData?.date || ""}
//                             className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
//                             {...register("date")}
//                             />
//                         </div>
//                         </div>
//                         <div className="mb-1 2xl:mb-2">
//                             <label htmlFor="short_description">Short Description</label>
//                             <input
//                             id="short_description"
//                             name="short_description"
//                             className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
//                             {...register("short_description")}
//                             />
//                         </div>
//                         <div className="mb-1 2xl:mb-2">
//                             <label htmlFor="Donation_Goal">Gonation Goal</label>
//                             <input
//                                 type="number"
//                                 id="donation_goal"
//                                 placeholder="donation_goal"
//                                 defaultValue={singleCausesData?.donation_goal || ""}
//                                 className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
//                                 {...register("donation_goal")}
//                             />
//                         </div>
//                         <div className="mb-1 2xl:mb-2">
//                             <label htmlFor="donation_achived">Donation Achieved</label>
//                             <input
//                                 id="donation_achived"
//                                 placeholder="Enter causes description"
//                                 defaultValue={singleCausesData?.donation_achived || ""}
//                                 className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
//                                 {...register("donation_achived")}
//                             />
//                         </div>
                        
//                         <button
//                         className="bg-green-500 text-white px-4 py-1 2xl:py-2 rounded-md hover:bg-green-700 duration-500"
//                         type="submit"
//                         >
//                         {loading ? "Updating..." : "Update"}
//                         </button>
//                         <button
//                         onClick={closeCausesUpdateModal}
//                         className="bg-red-500 text-white px-4 py-1 2xl:py-2 rounded-md ml-2 hover:bg-red-700 duration-500"
//                         >
//                         Cancel
//                         </button>
//                     </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateCausesModal;
/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {storage} from '../../../firebase/firebase.config'
import { v4 } from 'uuid';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
const UpdateCausesModal = ({singleCausesData, setIsUpdateCausesModalOpen}) => {
    console.log("singleCausesDataId", singleCausesData);
    const [loading, setLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure()
  const closeCausesUpdateModal = () => {
    setIsUpdateCausesModalOpen(false);
  };

  const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (data) =>{
      try {
        const response = await axiosSecure.put(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/causes/${singleCausesData?._id}`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (response.status === 200) {
            console.log('Updated causes successfully!');
            Swal.fire({
              title: 'Success!',
              text: 'Causes Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool',
            });
            // Optionally, you can redirect the user or show a success message
          } else {
            console.error('Error updating causes');
            Swal.fire({
              title: 'Error',
              text: 'Failed to update Causes. Please try again.',
              icon: 'error',
              confirmButtonText: 'Okay',
            });
            // Handle error, show error message, etc.
          }
        } catch (error) {
          console.error('Error updating causes:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to update Causes. Please try again.',
            icon: 'error',
            confirmButtonText: 'Okay',
          });
          // Handle error, show error message, etc.
        }
    }
    return (
        <div>
            <div>
                <div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black/20 bg-opacity-50 z-40 px-2 py-6 overflow-y-visible">
                    <div className="bg-white p-3 2xl:p-6 rounded-md">
                    <h2 className="text-lg 2xl:text-xl font-semibold mb-1 2xl:mb-2">
                        Update Causes
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="image" className="block mb-1">
                                Upload causes image
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
                            <label htmlFor="title">Causes Title</label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter title"
                                defaultValue={singleCausesData?.title || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("title")}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="writer">Category</label>
                            <input
                            type="text"
                            id="category"
                            placeholder="Category"
                            defaultValue={singleCausesData?.category || ""}
                            className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            {...register("category")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="Date">Date</label>
                            <input
                            type="date"
                            id="date"
                            placeholder="Enter Upload date"
                            defaultValue={singleCausesData?.date || ""}
                            className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            {...register("date")}
                            />
                        </div>
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="short_description">Short Description</label>
                            <input
                            id="short_description"
                            name="short_description"
                            defaultValue={singleCausesData?.short_description || ""}
                            className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                            {...register("short_description")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="Donation_Goal">Donation Goal</label>
                            <input
                                type="number"
                                id="donation_goal"
                                placeholder="donation_goal"
                                defaultValue={singleCausesData?.donation_goal || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("donation_goal")}
                            />
                        </div>
                        <div className="mb-1 2xl:mb-2">
                            <label htmlFor="donation_achived">Donation Achieved</label>
                            <input
                                id="donation_achived"
                                placeholder="Enter causes description"
                                defaultValue={singleCausesData?.donation_achived || ""}
                                className="w-full px-5 py-1 2xl:py-2 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
                                {...register("donation_achived")}
                            />
                        </div>
                        
                        <button
                        className="bg-green-500 text-white px-4 py-1 2xl:py-2 rounded-md hover:bg-green-700 duration-500"
                        type="submit"
                        >
                        {loading ? "Updating..." : "Update"}
                        </button>
                        <button
                        onClick={closeCausesUpdateModal}
                        className="bg-red-500 text-white px-4 py-1 2xl:py-2 rounded-md ml-2 hover:bg-red-700 duration-500"
                        >
                        Cancel
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateCausesModal;