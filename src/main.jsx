import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App'; // Make sure App uses RouterProvider
import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot from 'react-dom/client'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
