import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Create an Account</h1>
                <h2 className="text-lg font-bold">Register with Profast.</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        {/* name field  */}
                        <label className='label font-semibold text-lg'>Name</label>
                        <input type="text" {...register('name', { required: true, })} className="input" placeholder='Your Name' />
                        {/* email field  */}
                        <label className="label font-semibold text-lg">Email</label>
                        <input type="email" {...register('email', { required: true, })} className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'>Email is required </p>
                        }
                        {/* password field  */}
                        <label className="label font-semibold text-lg">Password</label>
                        <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Password Minimum 6 Carecters</p>
                        }
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>Please type your Password</p>
                        }
                    </fieldset>
                    <button className="hover:bg-[#CAEB66] border-2 p-2 rounded-lg hover:border-[#CAEB66] cursor-pointer hover:text-red-500 font-bold w-full mt-4">Register</button>
                    <p className='mt-2'>Already Have An Account? <Link to='/login' className='text-red-500 font-bold '>Sing In</Link></p>
                    <button
                        className="flex cursor-pointer items-center mt-4 justify-center gap-3 w-full py-2 border-2 border-green-500 rounded-md shadow-sm  hover:bg-green-500 transition"
                    >
                        <FcGoogle size={22} />
                        <span className="text-gray-800 font-bold hover:text-black  ">Login with Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;