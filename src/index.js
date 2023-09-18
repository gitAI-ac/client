import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { SocketProvider } from './MyContext';
import { MyProvider } from './alertContext';
import { UrlContextProvider } from './urlContext';
import { MyCallingProvider } from './callerIDsContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <UrlContextProvider>
    <SocketProvider>
      <MyProvider>
        <MyCallingProvider>
          <App />
        </MyCallingProvider>
      </MyProvider>
    </SocketProvider>
  </UrlContextProvider>,
);
