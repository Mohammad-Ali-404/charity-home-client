import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Causes from "../Pages/Causes/Causes";
import Events from "../Pages/Events/Events";
import Contact from "../Pages/Contact/Contact";

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
                path:'events',
                element:<Events/>
            },
            {
                path:'contact',
                element:<Contact/>
            }
        ]
    }
])

export default router;