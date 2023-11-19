import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Causes from "../Pages/Causes/Causes";
import Events from "../Pages/Events/Events";
import Contact from "../Pages/Contact/Contact";
import Donation from "../Pages/Donation/Donation";
import CausesDetails from "../Pages/Causes/CausesDetails/CausesDetails";
import AllNews from "../Pages/News/AllNews";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import ProfileEditForm from "../Pages/Dashboard/AdminProfile/AdminProfile/ProfileEditForm";

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
                path:'/causesdetails/:_id',
                element:<CausesDetails/>,
                loader: ({params}) =>fetch(`http://localhost:5000/causesdetails/${params._id}`)
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
            }
        ]
    }
])

export default router;