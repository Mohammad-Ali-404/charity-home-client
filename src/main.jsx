import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './routes/Router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div >
    <React.StrictMode>
       <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>,
)