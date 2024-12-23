import React, { useContext } from 'react';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

function LogoutWithGoogle() {
    const { setUserRole } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        googleLogout();
        localStorage.removeItem('loginState');
        sessionStorage.removeItem('userRole');

        setUserRole(null);
        navigate('/login');
        console.log('Logout successful');
    };

    return (
        <div className="LogoutWithGoogle">
            <button className="logout-button-a" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default LogoutWithGoogle;
