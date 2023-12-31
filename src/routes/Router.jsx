import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Causes from "../Pages/Causes/Causes";
import Events from "../Pages/Events/Events";
import Contact from "../Pages/Contact/Contact";
import CausesDetails from "../Pages/Causes/CausesDetails/CausesDetails";
import AllNews from "../Pages/News/AllNews";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import ProfileEditForm from "../Pages/Dashboard/AdminProfile/AdminProfile/ProfileEditForm";
import Donation from "../Pages/Donation/Donation";
import PaymentHistory from "../Payment/PaymentHistory";
import AppliedVolunter from "../Pages/Dashboard/AppliedVolunter/AppliedVolunter";
import SocialMedia from "../Pages/Dashboard/SocialMedia/SocialMedia";
import AddedCauses from "../Pages/Dashboard/AddCauses/AddedCauses";
import BlogPost from "../Pages/Dashboard/BlogPost/BlogPost";
import ManageBlog from "../Pages/Dashboard/BlogPost/ManageBlog/ManageBlog";
import ManageCauses from "../Pages/Dashboard/AddCauses/ManageCauses/ManageCauses";
import Blog from "../Pages/Blog/Blog";
import AddedVolunteer from "../Pages/Dashboard/Volunteer/AddedVolunteer";
import Team from "../Pages/Team/Team";
import ManageVolunteer from "../Pages/Dashboard/Volunteer/ManageVolunteer";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'causes',
                element:<Causes/>
            },
            {
                path: '/causesdetails/:title',
                element: <CausesDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_VITE_SERVER_BASE_URL}/causesdetails/${params.title}`)
            },
            {
                path:'events',
                element:<Events/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'donation',
                element:<Donation/>
            },
            {
                path:"blog",
                element:<Blog/>
            },
            {
                path:"team",
                element:<Team/>
            },
            {
                path:'news',
                element:<AllNews/>
            },
            {
                path:'admin',
                element:<Login/>
            },
            {
                path:"register",
                element:<PrivateRoute><Register/></PrivateRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        errorElement:<Error/>,
        children:[
            {
                path:'admin-home',
                element:<AdminHome/>
            },
            {
                path:'admin-profile',
                element:<AdminProfile/>
            },
            {
                path:"admin-profile-edit",
                element:<ProfileEditForm/>
            },
            {
                path:'admin-payment-history',
                element:<PaymentHistory/>
            },
            {
                path:'admin-applied-volunter',
                element:<AppliedVolunter/>
            },
            {
                path:'admin-added-volunter',
                element:<AddedVolunteer/>
            },
            {
                path:'admin-manage-volunter',
                element:<ManageVolunteer/>
            },
            {
                path:'admin-added-causes',
                element:<AddedCauses/>
            },
            {
                path:'admin-manage-causes',
                element:<ManageCauses/>
            },
            {
                path:'admin-post-blog',
                element:<BlogPost/>
            },
            {
                path:'admin-manage-blog',
                element:<ManageBlog/>
            },
            {
                path:'admin-social-media',
                element:<SocialMedia/>
            }
        ]
    }
])

export default router;