import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router';

const ProFastLogo = () => {
    return (
        <Link to='/'>
            <div className='relative'>
                <img src={logo} alt="" />
                <div className='absolute top-4 left-5'>
                    <p className='text-2xl font-bold'>ProFast</p>
                </div>
            </div>
        </Link>
    );
};

export default ProFastLogo;