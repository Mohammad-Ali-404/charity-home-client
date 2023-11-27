import React from "react";
import { useRef } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from '../../../Hooks/UseAxiosSecure'
const SocialMediaForm = () => {
    const form = useRef();
    const [axiosSecure] = useAxiosSecure()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(form.current);
        const facebook = formData.get('facebook');
        const twitter = formData.get('twitter');
        const instagram = formData.get('instagram');
        const linkedin = formData.get('linkedin');
        if (!facebook || !twitter || !instagram || !linkedin) {
            // If any field is empty, show an alert to the user
            Swal.fire({
                title: 'Please fill out all fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        try {
            const response = await axiosSecure.post(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/social-media`, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            facebook,
                            twitter,
                            instagram,
                            linkedin,
                        }),
                    });

            if (response.ok) {
               e.target.reset();
                Swal.fire({
                    title: 'Your Social media data Update successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message', error);
        }
    };
      

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} ref={form}>
        <div className="mb-4">
          <label htmlFor="title">Facebook link</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            name="facebook"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title">Twitter link</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            name="twitter"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title">Instagram link</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            name="instagram"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title">Linkedin link</label>
          <input
            type="text"
            id="title"
            placeholder="Enter title"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            name="linkedin"
          />
        </div>
        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default SocialMediaForm;