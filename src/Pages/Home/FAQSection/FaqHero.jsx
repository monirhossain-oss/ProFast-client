import React from 'react';
import FaqQuestion from './FaqQuestion';

const FaqHero = () => {
    return (
        <div className='w-[80%] mx-auto p-8 mb-8 m-4'>
            <div className='flex flex-col items-center justify-center gap-4 m-8'>
                <h2 className='font-extrabold text-4xl text-green-500'>Frequently Asked Question (FAQ)</h2>
                <p className='text-[#606060] text-center'>Enhance posture, mobility, and well-being effortlessly <br /> with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <FaqQuestion></FaqQuestion>
        </div>
    );
};

export default FaqHero;