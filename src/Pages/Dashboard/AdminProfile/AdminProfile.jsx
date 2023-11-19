import React from 'react';
import DashboardTitle from '../Shared/DashboardTitle';
import Profile from './AdminProfile/Profile';

const AdminProfile = () => {
    return (
        <div className='pt-10'>
            <DashboardTitle title='Admin Profile!' subTitle='Manage your profile here'/>
            <div>
                <Profile/>
            </div>
        </div>
    );
};

export default AdminProfile;