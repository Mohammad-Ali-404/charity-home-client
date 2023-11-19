import React from "react";
import { BiBriefcase } from "react-icons/bi";

const VolunterApply = () => {

  return (
    <div className="mt-8 sm:w-[500px] dark:bg-gray-800  dark:text-white bg-white rounded-lg p-8 shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Notifications</h3>
      <div>
        
          <div  className="flex items-center gap-2">
            <div className="bg-green-100 p-3 rounded-full">
              <BiBriefcase className="text-primary text-lg" />
            </div>
            <p className="py-4">
              <span className="text-blue-700 font-semibold">
                Name
              </span>{" "}
              applied for a job
              <span className="text-primary font-semibold">
                {" "}
                Volunter
              </span>
            </p>
          </div>
        
      </div>{" "}
    </div>
  );
};

export default VolunterApply;