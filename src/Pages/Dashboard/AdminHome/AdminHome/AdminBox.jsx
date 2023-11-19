import React from 'react';
import { AiFillMessage, AiOutlineFileDone } from 'react-icons/ai';
import {GiReceiveMoney } from "react-icons/gi";
import { FaUsersRays } from "react-icons/fa6";
const AdminBox = () => {
    return (
        <div>
            <div className="mt-6 dark:bg-gray-800 dark:text-white space-y-8 md:space-y-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-6">
                {/* box-1 */}
                <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
                    <div className="bg-blue-100 p-4 rounded-lg">
                    <GiReceiveMoney className="text-blue-800  text-5xl" />
                    </div>
                    <div>
                    <p className="text-blue-800 text-4xl font-semibold text-end">
                        50
                    </p>
                    <p>Fund Raised</p>
                    </div>
                </div>
                {/* box-2 */}
                <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
                    <div className="bg-red-100 p-4 rounded-lg">
                    <FaUsersRays className="text-red-700 text-5xl" />
                    </div>
                    <div>
                    <p className="text-red-700 text-4xl font-semibold text-end">
                        10
                    </p>
                    <p>Total volunteer</p>
                    </div>
                </div>
                {/* box-3 */}
                <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
                    <div className="bg-yellow-100 p-4 rounded-lg">
                    <AiFillMessage className="text-yellow-500  text-5xl" />
                    </div>
                    <div>
                    <p className="text-yellow-500 text-4xl font-semibold text-end">74</p>
                    <p>Messages</p>
                    </div>
                </div>
                {/* box-4 */}
                <div className="p-8 flex justify-between w-full dark:bg-gray-800 bg-white rounded-lg items-center shadow-sm border-0">
                    <div className="bg-green-100 p-4 rounded-lg">
                    <AiOutlineFileDone className="text-green-700  text-5xl" />
                    </div>
                    <div>
                    <p className="text-green-700 text-4xl font-semibold text-end">
                        20
                    </p>
                    <p>Evaluated</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBox;