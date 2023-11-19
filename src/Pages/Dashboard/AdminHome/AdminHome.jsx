import React from 'react';
import AdminBox from './AdminHome/AdminBox';
import DonationOverview from './AdminHome/DonationOverview';
import VolunterApply from './AdminHome/VolunterApply';


const AdminHome = () => {
    return (
        <div className='pt-10'>
            <AdminBox/>
            <div className='sm:flex items-start gap-4 w-full'>
                <div className="sm:w-1/2">
                    <DonationOverview/>
                </div>
                <VolunterApply/>
            </div>
        </div>
    );
};

export default AdminHome;