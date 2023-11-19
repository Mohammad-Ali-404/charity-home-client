/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const [succes, setSuccess] = useState();
  const [error, setError] = useState()

  const handleLogin = event => {
    event.preventDefault();
    setSuccess('')
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login Succssfully done ',
          showConfirmButton: false,
          timer: 1500
      })
        form.reset()
        navigate(from, {replace:true})
      })
      .catch(error => {
        setError("Email or password is incorrect");
        form.reset()
      })
  }
    return (
        <div>
            <PageTitle heading='Login' subHeading='Login' />
           <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto mb-8 mt-8 dark:text-gray-100 bg-gray-300">
                <h1 className="sm:text-2xl text-xl font-bold text-center">Only Admin Can Login</h1>
                <form onSubmit={handleLogin} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label  className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email"  placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label  className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password"  placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required/>
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="btn btn-primary" type='submit'>Sign in</button>
                <p className="text-sm text-center sm:px-6 dark:text-gray-400">Don't have an account? 
                    <Link to='/register'  className="underline dark:text-gray-100"> Sign up</Link>
                </p>
                </form>
            </div>
        </div>
    );
};

export default Login;