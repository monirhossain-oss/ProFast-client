import React from 'react';
import logo from '../../../assets/logo.png'

const ProFastLogo = () => {
    return (
        <div className='relative'>
            <img src={logo} alt="" />
            <div className='absolute top-4 left-5'>
                <p className='text-2xl font-bold'>ProFast</p>
            </div>
        </div>
    );
};

export default ProFastLogo;