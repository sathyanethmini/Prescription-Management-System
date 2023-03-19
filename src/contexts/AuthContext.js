import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    theme: 'light',
    user: null,
    currentUserType: null
  });

  return (
    <MyContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </MyContext.Provider>
  );
};