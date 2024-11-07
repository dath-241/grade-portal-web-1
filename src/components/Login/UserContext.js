import React, { createContext } from 'react';

export const UserContext = createContext(); // create context object

export const UserProvider = ({ children }) => {
    // const [userRole, setUserRole] = useState(null);

    // pass the userRole and setUserRole to the chilren prop
    // -> children can access the userRole and setUserRole
    return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
