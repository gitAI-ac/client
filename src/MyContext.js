import React, { createContext, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useUrl } from './urlContext';

const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const baseurl = useUrl();
  const socket = io(`${baseurl}`); // Replace with your server address

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
