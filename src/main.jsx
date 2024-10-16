import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthComponent from './AuthComponent';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('auth-root'));
root.render(
  <React.StrictMode>
    <AuthComponent />
  </React.StrictMode>
);