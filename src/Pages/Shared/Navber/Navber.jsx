import React from 'react';
import { Link, NavLink } from 'react-router';
import ProFastLogo from '../ProFastLogo/ProFastLogo';
import useAuth from '../../../hooks/useAuth';
import { LogOut } from 'lucide-react';

const Navber = () => {
    const { user, logOut } = useAuth();
    console.log(user?.email)
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
        <li><NavLink to='/sendParcel'>Send A Parcel</NavLink></li>
        {
            user && <>
                <li><NavLink to='/deshboard'>Deshboard</NavLink></li>
            </>
        }
        <li><NavLink to='about'>About</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h2 className="btn btn-ghost text-xl"><ProFastLogo></ProFastLogo></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ? <>
                        <button
                            onClick={handleLogOut}
                            className="flex items-center gap-2 px-4 py-2 bg-red-400 hover:bg-red-600 cursor-pointer text-white font-semibold rounded-xl shadow-md transition duration-300 ease-in-out"
                        >
                            <LogOut size={20} />
                            Logout
                        </button>
                    </> :
                        <>
                            <Link to='/login'>Sing In</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navber;