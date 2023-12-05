import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import DashboardTitle from '../Shared/DashboardTitle';
import Swal from 'sweetalert2';
import UpdateVolunteerProfile from './UpdateVolunteerProfile/UpdateVolunteerModal';

const ManageVolunteer = () => {
    const [isUpdateVolunteerModalOpen, setIsUpdatVolunteerModalOpen] = useState(false);
    const [volunteerId, setVolunteerId] = useState("")
    const [singleVolunteerData, setSingleVolunteerData] = useState([])
    const [axiosSecure] = useAxiosSecure()
    const { data: allVolunteerData = [], refetch } = useQuery({
        queryKey: ["allVolunteerData"],
        queryFn: async () => {
          const response = await axiosSecure.get(
            `${import.meta.env.VITE_VITE_SERVER_BASE_URL}/volunteer`
          );
          return response.data;
        },
      });
      console.log("allVolunteerData", allVolunteerData);
      const handleDeleteVolunteer = (volunteerData) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure
              .delete(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/volunteer/${volunteerData._id}`)
              .then((res) => {
                if (res?.data?.acknowledged) {
                  refetch();
                  Swal.fire("Deleted!", "Volunteer has been deleted.", "success");
                }
              })
              .catch((error) => {
                console.error("error:", error);
              });
          }
        });
      };
    return (
        <div>
             <div>
            <div className='pt-10'>
                <DashboardTitle title='Manage Volunteer' subTitle="Added Create daily new causes"/>
            </div>
            <div className='bg-white p-8 rounded-xl mt-10'>
            <div className="bg-white shadow-md p-4 md:p-8 mx-2 md:mx-10 rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-slate-800">
                <tr className=''>
                  <th className="py-3 pl-2 md:py-5 text-left text-base md:text-lg pe-2">
                    Image
                  </th>
                  <th className="py-3 md:py-5 text-left text-base md:text-lg">
                    Title
                  </th>
                  <th className="py-3 md:py-5 pe-6 text-left text-base md:text-lg">
                    Update
                  </th>
                  <th className="py-3 pr-2 md:py-5 text-left text-base md:text-lg">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allVolunteerData.map((volunteerData) => (
                  <>
                    <tr key={volunteerData._id}>
                      <td className="py-2 md:py-4">
                        <img
                          src={volunteerData.image}
                          alt="causes"
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                        />
                      </td>
                      <td className="py-2 xl:text-lg md:text-sm text-xs md:py-4 w-40 md:w-full">
                        {volunteerData.title}
                      </td>
                      <td className="py-2 md:py-4">
                        <div className="bg-gray-100 p-1 ms-3 md:p-2 rounded-lg">
                          <FaRegEdit
                            onClick={() => {
                              setIsUpdatVolunteerModalOpen(true);
                              setVolunteerId(volunteerData?._id);
                              setSingleVolunteerData(volunteerData);
                              console.log("manage volunteer", volunteerData?._id);
                            }}
                            className="w-3 h-3 md:w-4 md:h-4 cursor-pointer text-blue-600"
                          />
                        </div>
                      </td>
                      <td className="py-2 md:py-4">
                        <div className="bg-gray-100 p-1 ms-3 md:p-2 rounded-lg">
                          <GoTrash
                            onClick={() => {
                              handleDeleteVolunteer(volunteerData);
                            }}
                            className="w-3 h-3 md:w-4 md:h-4 cursor-pointer text-red-500"
                          />
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
                {isUpdateVolunteerModalOpen && (
                <UpdateVolunteerProfile
                key={volunteerId._id}
                singleVolunteerData={singleVolunteerData}
                setIsUpdatVolunteerModalOpen={setIsUpdatVolunteerModalOpen}
                />
            )}
        </div>
        </div>
        </div>
    );
};

export default ManageVolunteer;