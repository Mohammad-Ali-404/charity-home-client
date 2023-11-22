import React from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import ProfileDropdown from '../../../components/ProfileDropdown';
import Container from '../../Shared/Container/Container';
const Navbar = () => {
    return (
        <div className=''>
            <Container>
            <div className="navbar  bg-base-100">
                <div className="flex-1">
                    <Link className="text-xl"><img src={logo} alt="" /></Link>
                </div>
                <div className="flex-none z-10 inset-0">
                    <ProfileDropdown/>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Navbar;