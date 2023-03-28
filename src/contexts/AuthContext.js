import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const MyProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    theme: 'light',
    user: null,
    currentUserType: []
  });

  return (
    <UserContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </UserContext.Provider>
  );
};