import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { bypassLogin } from './config';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { userRole } = useContext(UserContext);
    const isLoggedIn = localStorage.getItem('loginState');

    if (bypassLogin || (isLoggedIn && allowedRoles.includes(userRole))) {
        return children;
    } else if (isLoggedIn) {
        return <Navigate to="/unauthorized" />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
