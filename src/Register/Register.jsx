/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../Pages/Shared/PageTitle/PageTitle';
import { AuthContext } from '../Providers/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure()
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = {name: data.name, email: data.email}
                        axiosSecure.post('http://localhost:5000/users', {
                            
                            headers: {
                                'content-type' : 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                        

                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <div>
            <PageTitle heading='Register' subHeading='Register'/>
           <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto mb-8 mt-8 dark:text-gray-100 bg-gray-300">
                <h1 className="text-2xl font-bold text-center">Only Admin Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div  className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" name='name' className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                            <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" {...register("photoURL", { required: true })} placeholder="Enter your photo"  className="input input-bordered" />
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, minLength:6 }) } placeholder="password"  className="input input-bordered" />
                    <label className="label">
                    <p>Already have an account Please <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                    </label>
                </div>
                <div className="form-control">
                  <button className="btn btn-primary" type='submit'>Register</button>
                </div>
                <p className='text-red-800'></p>
                <p className='text-green-600'></p>
            </div>
                </form>

            </div>
        </div>
    );
};

export default Register;