import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function LogoutWithGoogle() {
    // const { setUserRole } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        googleLogout();
        localStorage.removeItem('loginState');
        // setUserRole(null);
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
