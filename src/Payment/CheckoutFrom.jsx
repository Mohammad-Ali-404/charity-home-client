/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import image from '../assets/logo/master.png'
import image2 from '../assets/logo/paypal.png'
import image3 from '../assets/logo/skill.png'
import image4 from '../assets/logo/visa.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
const CheckoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [donationAmount, setDonationAmount] = useState(0);
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    //for billing details information
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        if (donationAmount >= 1) {
            axiosSecure.post('http://localhost:5000/create-payment-intent', { donationAmount })
                .then(res => {
                    console.log(res);
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error creating payment intent:', error);
                });
        } else {
            console.error('Invalid donation amount:', donationAmount);
        }
    }, [donationAmount, axiosSecure]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
       
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card,  // Pass the card object here
        
        });
    
        if (error) {
            console.error('[error]', error);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            // You can handle the successful payment here, e.g., send the paymentMethod.id to your server
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                  name: `${firstName} ${lastName}` || 'Unknown',
                  email: email || 'Unknown',
                  phoneNumber: phoneNumber || 'unknown',
                  address: {
                    country: country || 'unknown',
                    address: address || 'unknown',
                  },
                  feedback: feedback || ''
                },
              },
          }
        );

        if (confirmError) {
            console.log('Error confirming payment:', confirmError);
        } else {
            console.log('PaymentIntent:', paymentIntent);
            // Handle successful payment
        }

        if (paymentIntent && paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment ={
                transactionId: paymentIntent.id,
                name: `${firstName} ${lastName}` || '',
                donate: donationAmount,
                email:email,
                country: country || '',
                address: address || '',
                feedback: feedback || ''

            }
            axiosSecure.post('/payments', payment)
            .then(res =>{
                console.log(res.data);
                if (res.data.insertedId) {
                    
                    // display confrim
                }
            })
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className='pt-5'>
            <div className='sm:w-7/12 w-full'>
                        <div className='mt-10 sm:w-[925px] flex w-full justify-between rounded shadow-2xl shadow-slate-400 text-2xl font-semibold px-2 py-10'>
                        
                            <h1 className='sm:w-auto sm:text-2xl text-xl w-7/12 pl-5'>Enter your donation amount</h1>
                            <div className='flex items-center -mt-5'>
                                <h1 className=''>$</h1>
                                <input
                                    type="number"
                                    id="donationAmount"
                                    className="mt-1 p-2 sm:w-auto border-b-2 border-red-500 focus:border-b-2 hover:border-b-2 focus:outline-none  w-40"
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="card pt-16 w-full space-y-6 sm:px-14 mt-10 shadow-2xl shadow-slate-400 sm:w-[925px] px-6 rounded">
                        <h1 className='sm:w-auto sm:text-2xl text-xl w-7/12 font-semibold'>Enter your Details</h1>
                            <div className="sm:flex sm:space-x-6 ">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Enter Your First Name"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm bg-red-50 focus:ring focus:border-red-400 dark:bg-gray-800"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Enter Your last Name"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 bg-red-50focus:ring dark:bg-gray-800"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    />
                                </label>
                                </div>
                            </div>
                            <div className="sm:flex sm:space-x-6">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="number"
                                    placeholder="Enter Your Phone Number"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </label>
                                </div>
                            </div>
                            <div className="sm:flex sm:space-x-6">
                                <div className="sm:w-96">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    />
                                </label>
                                </div>
                                <div className="sm:w-1/2">
                                <label className="block py-2">
                                    <input
                                    type="text"
                                    placeholder="Enter Your Country"
                                    className="block p-3 w-full sm:w-96 rounded-sm shadow-sm  bg-red-50 focus:ring dark:bg-gray-800"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    />
                                </label>
                                </div>
                            </div>
                            
                            <label className="block pb-10">
                                <textarea
                                rows="6"
                                className="block sm:w-[790px] w-full pt-4 pl-3 rounded-sm focus:border-red-500 border border-gray-300 font-normal bg-red-50 dark:bg-gray-800"
                                placeholder='Write a Feedback'
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                ></textarea>
                            </label>
                        </div>
                        <div className="card pt-16 w-full space-y-6 sm:px-14 mt-10 shadow-2xl shadow-slate-400 sm:w-[925px] px-6 rounded">
                            <h1 className='sm:w-auto sm:text-2xl text-xl w-7/12 font-semibold'>Enter your Bank Details</h1>
                            <div className='flex sm:gap-5 gap-2'>
                                <Link><img src={image} alt="" /></Link>
                                <Link><img src={image2} alt="" /></Link>
                                <Link><img src={image3} alt="" /></Link>
                                <Link><img src={image4} alt="" /></Link>
                            </div>
                            <div>
                                <CardElement
                                    className=' bg-red-50 p-4'
                                        options={{
                                        style: {
                                            base: {
                                            fontSize: '16px',
                                            '::placeholder': {
                                                color: '#474342',
                                            },
                                            },
                                            invalid: {
                                            color: '#474342',
                                            },
                                        },
                                        }}
                                    />
                                <div className='py-10'>
                                    <button type='submit' disabled={!stripe || !clientSecret || processing} className='px-7 flex items-center py-3 rounded-md  text-white text-lg bg-red-600 hover:bg-slate-700 duration-700 font-semibold'><BsFillCheckCircleFill className='mr-2'/>Donate Now</button>
                                </div>
                            </div>
                            {transactionId && <p className='text-green-500'>Transaction Complete with transactionId :{transactionId}</p>}
                        </div>
                    </div>
        </form>
    );
};

export default CheckoutFrom;