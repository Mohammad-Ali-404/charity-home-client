import React from 'react';
import { AiOutlineHome, AiOutlineMoneyCollect, AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMenuAlt3, HiOutlineShare } from "react-icons/hi";
import { BsSignpostSplit } from "react-icons/bs";
import { RiImageEditFill } from "react-icons/ri";
import { GiNewspaper } from "react-icons/gi";
import { VscDiffAdded } from "react-icons/vsc";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { RiUserForbidLine } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Dashboard/Shared/DashboraNavbar';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Dashboard = () => {
	const {logOut} = useContext(AuthContext)
	const handleLogout = () => {
        logOut()
          .then()
          .catch(error => console.log(error))
      }
    return (
    <div>
		<div className=''>
			<Navbar/>
		</div>
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col sm:px-10 px-6 bg-slate-100">
				<label htmlFor="my-drawer-2" className="mb-5 text-base w-28 cursor-pointer dark:bg-slate-700 text-primary drawer-open hover:text-green-600 flex items-center gap-2 bg-slate-200 hover:bg-slate-300 duration-500 px-6 py-3 rounded-md mt-6 lg:hidden">
					<HiOutlineMenuAlt3 className='text-xl'/> Menu
				</label>
				<Outlet></Outlet>
			</div>
			<div className="drawer-side">
			<label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
			<ul className="menu p-5 w-80 min-h-full bg-base-200 text-base-content text-lg">
					<li className="rounded-sm">
						<Link to='/dashboard/admin-home' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<AiOutlineHome/>
							<span className='sm:py-3 py-3 p px-3' >Home</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='/dashboard/admin-profile' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<AiOutlineUser/>
							<span className='sm:py-3 py-3 p px-3' >Admin Profile</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-payment-history' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<AiOutlineMoneyCollect/>
							<span className='sm:py-3 py-3 p px-3'>Payment History</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-applied-volunter' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<MdOutlineVolunteerActivism/>
							<span className='sm:py-3 py-3 p px-3'>Applied For Volunteer</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-added-volunter' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<FaUserPlus/>
							<span className='sm:py-3 py-3 p px-3'>Added New Volunteer</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-manage-volunter' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<RiUserForbidLine/>
							<span className='sm:py-3 py-3 p px-3'>Manage Volunteer</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-added-causes' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<VscDiffAdded/>
							<span className='sm:py-3 py-3 p px-3'>Added Causes</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-manage-causes' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<RiImageEditFill/>
							<span className='sm:py-3 py-3 p px-3'>Manage Causes</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-addes-news' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<VscDiffAdded/>
							<span className='sm:py-3 py-3 p px-3'>Added News</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-manage-news' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<GiNewspaper/>
							<span className='sm:py-3 py-3 p px-3'>Manage News</span>
						</Link>
					</li>
					<li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
						<Link to="admin-post-blog" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<VscDiffAdded/>
							<span className='sm:py-3 py-3 p px-3'>Post A New Blog</span>
						</Link>
					</li>
					<li className="rounded-sm dark:bg-gray-800 dark:text-gray-50">
						<Link to="admin-manage-blog" href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<BsSignpostSplit/>
							<span className='sm:py-3 py-3 p px-3'>Manage Blog</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link to='admin-social-media' href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<HiOutlineShare/>
							<span className='sm:py-3 py-3 p px-3'>Social Media</span>
						</Link>
					</li>
					<li className="rounded-sm">
						<Link onClick={handleLogout} href="#" className="flex items-center p-2 space-x-3 rounded-md">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
								<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
								<rect width="32" height="64" x="256" y="232"></rect>
							</svg>
							<span className='sm:py-3 py-3 p px-3'>Logout</span>
						</Link>
					</li>
			</ul>
			
			</div>
		</div>
	</div>
    );
};

export default Dashboard;