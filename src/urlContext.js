import React, { createContext, useContext, useEffect } from 'react';

const UrlContext = createContext();

export function useUrl() {
  return useContext(UrlContext);
}

export function UrlContextProvider({ children }) {
  const url = 'http://127.0.0.1:3000';
  const secondurl = 'https://bobikit.onrender.com'; // Replace with your server address

  useEffect(() => {
    return () => {};
  }, []);

  return <UrlContext.Provider value={url}>{children}</UrlContext.Provider>;
}
