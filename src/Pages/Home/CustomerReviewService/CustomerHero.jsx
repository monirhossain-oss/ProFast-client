import React from 'react';
import CustomerReview from './CustomerReview';
import customerLogo from '../../../assets/customer-top.png'

const CustomerHero = () => {
    return (
        <div className='p-8 mb-8 m-4'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <img src={customerLogo} alt="" />
                <h2 className='font-extrabold text-4xl'>What our customers are sayings</h2>
                <p className='text-[#606060] text-center'>Enhance posture, mobility, and well-being <br />effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default CustomerHero;