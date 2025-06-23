import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import ProFastLogo from '../Pages/Shared/ProFastLogo/ProFastLogo';

const AuthLayout = () => {
    return (
        <div className=" bg-base-200 p-12">
            <ProFastLogo></ProFastLogo>
            <div className="hero-content flex-col justify-center lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={authImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1 items-center justify-center'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;