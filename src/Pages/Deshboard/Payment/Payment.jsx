import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import PaymentFrom from './PaymentFrom';

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);

const Payment = () => {
    // const {parcelId}=useParams();
    // console.log(parcelId)
    return (
        <Elements stripe={stripePromise}>
            <PaymentFrom></PaymentFrom>
        </Elements>
    );
};

export default Payment;