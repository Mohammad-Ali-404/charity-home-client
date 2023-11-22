import React from 'react';
import CheckoutFrom from './CheckoutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const donationAmount = (paymentMethod, donationAmount) => {
        // You can now send paymentMethod and donationAmount to your server
        console.log('Payment Method:', paymentMethod);
        console.log('Donation Amount:', donationAmount);

        // Add logic to send data to your server
    };
    return (
        <div>
            <Elements stripe={stripePromise} donationAmount={donationAmount}>
                <CheckoutFrom/>
            </Elements>
        </div>
    );
};

export default Payment;