// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { bypassLogin } from './config';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('loginState');

    if (bypassLogin || isLoggedIn) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;