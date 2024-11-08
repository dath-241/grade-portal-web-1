import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(() => {
        // Load userRole from localStorage if available
        const storedUserRole = localStorage.getItem('userRole');
        return storedUserRole || null;
    });

    // Update localStorage whenever userRole changes
    useEffect(() => {
        if (userRole) {
            localStorage.setItem('userRole', userRole);
        } else {
            localStorage.removeItem('userRole');
        }
    }, [userRole]);

    return <UserContext.Provider value={{ userRole, setUserRole }}>{children}</UserContext.Provider>;
};
