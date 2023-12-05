import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { useState } from 'react';
import Swal from 'sweetalert2';
import UpdateCausesModal from './UpdateCausesModal';
import { useQuery } from '@tanstack/react-query';
import DashboardTitle from '../../Shared/DashboardTitle';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure';

const ManageCauses = () => {
    const [isUpdateCausesModalOpen, setIsUpdateCausesModalOpen] = useState(false);
    const [CausesId, setCausesId] = useState("");
    const [singleCausesData, setSingleCausesData] = useState(null);
    const [axiosSecure] = useAxiosSecure()

    const { data: allCausesData = [], refetch } = useQuery({
        queryKey: ["allCausesData"],
        queryFn: async () => {
          const response = await axiosSecure.get(
            `${import.meta.env.VITE_VITE_SERVER_BASE_URL}/causes`
          );
          return response.data;
        },
      });
      console.log("allCausesData", allCausesData);
    const handleDeleteBlog = (causesData) => {
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
              .delete(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/causes/${causesData._id}`)
              .then((res) => {
                if (res?.data?.acknowledged) {
                  refetch();
                  Swal.fire("Deleted!", "Blog has been deleted.", "success");
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
            <div className='pt-10'>
                <DashboardTitle title='Manage Causes' subTitle="Manage your all causes"/>
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
                {allCausesData.map((causesData) => (
                  <>
                    <tr key={causesData._id}>
                      <td className="py-2 md:py-4">
                        <img
                          src={causesData.image}
                          alt="causes"
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl mr-3 md:mr-4"
                        />
                      </td>
                      <td className="py-2 xl:text-lg md:text-sm text-xs md:py-4 w-40 md:w-full">
                        {causesData.title}
                      </td>
                      <td className="py-2 md:py-4">
                        <div className="bg-gray-100 p-1 ms-3 md:p-2 rounded-lg">
                          <FaRegEdit
                            onClick={() => {
                              setIsUpdateCausesModalOpen(true);
                              setCausesId(causesData?._id);
                              setSingleCausesData(causesData);
                              console.log("manage causes", causesData?._id);
                            }}
                            className="w-3 h-3 md:w-4 md:h-4 cursor-pointer text-blue-600"
                          />
                        </div>
                      </td>
                      <td className="py-2 md:py-4">
                        <div className="bg-gray-100 p-1 ms-3 md:p-2 rounded-lg">
                          <GoTrash
                            onClick={() => {
                              handleDeleteBlog(causesData);
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
                {isUpdateCausesModalOpen && (
                <UpdateCausesModal
                key={CausesId._id}
                singleCausesData={singleCausesData}
                setIsUpdateCausesModalOpen={setIsUpdateCausesModalOpen}
                />
            )}
        </div>
        </div>
    );
};

export default ManageCauses;