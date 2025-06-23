import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h2 className='font-extrabold text-4xl'>Welcome Back</h2>
                <h1 className="text-xl font-bold">Login with ProFast </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        {/* email field  */}
                        <label className="label font-semibold text-lg">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'>Email is required </p>
                        }
                        {/* password field  */}
                        <label className="label font-semibold text-lg">Password</label>
                        <input type="password"
                            {...register('password', { required: true, minLength: 8 })}

                            className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Password Minimum 6 Carecters</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                    </fieldset>
                    <button className="hover:bg-[#CAEB66] border-2 p-2 rounded-lg hover:border-[#CAEB66] cursor-pointer hover:text-red-500 font-bold w-full mt-4">Login</button>
                    <p className='mt-2'>Don't Have Any Account? <Link to='/register' className='text-red-500 font-bold '>Register</Link></p>
                    <button
                        className="flex items-center mt-4 justify-center gap-3 w-full py-2 border-2 border-green-500 rounded-md shadow-sm  hover:bg-green-500 transition"
                    >
                        <FcGoogle size={22} />
                        <span className="text-gray-100 hover:text-black  font-semibold">Login with Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;