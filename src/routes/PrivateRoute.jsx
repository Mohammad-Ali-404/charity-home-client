import React, {useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { Heart } from 'react-spinners-css';
export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
      return <div className="flex justify-center items-center h-screen bg-slate-200">
      <Heart
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          color="#F55333"
          />
      </div>
    }

    if(user){
        return children;
    }
  return <Navigate to="/" state={{from:location}} replace></Navigate>
}