import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // Correct import
import App from './App'; // Make sure App uses RouterProvider
import './index.css';
import {store} from './redux/store';

const root = createRoot(document.getElementById('root')); // Use createRoot from 'react-dom/client'
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);