import React from 'react';
import BrandsLogo from './BrandsLogo';

const Brands = () => {
    return (
        <div className='m-4 px-8 bg-white p-4 rounded-2xl'>
            <h2 className='font-extrabold text-2xl text-center mb-8 text-[#03373D]'>We've helped thousands of sales teams</h2>
            <BrandsLogo></BrandsLogo>
        </div>
    );
};

export default Brands;