// MyContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export function MyCallingProvider({ children }) {
  const [callingId, setCallingId] = useState({});

  const callingIdObject = ({ callerid, socketid }) => {
    setCallingId((prevIds) => ({
      ...prevIds,
      [callerid]: socketid, // Use callerid as a key in the state object
    }));
  };

  return (
    <MyContext.Provider
      value={{
        callingIdObject,
        callingId,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

// Custom hook to access the context
export function useMyCallers() {
  return useContext(MyContext);
}
