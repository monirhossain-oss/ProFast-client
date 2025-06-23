import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <span className="loading loading-spinner text-warning"></span>
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivetRoutes;