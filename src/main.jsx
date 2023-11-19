import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './routes/Router.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <div >
    <React.StrictMode>
       <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
       </AuthProvider>
    </React.StrictMode>
  </div>,
)
