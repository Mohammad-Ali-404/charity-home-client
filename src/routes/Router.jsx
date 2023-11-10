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
                path:'/causesdetails/:id',
                element:<CausesDetails/>,
                loader: ({params}) =>fetch(`http://localhost:5000/causesdetails/${params.id}`)
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
            }
        ]
    }
])

export default router;