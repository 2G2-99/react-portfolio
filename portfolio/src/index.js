// Importing the libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Creating a reference to the #root div
const el = document.getElementById('root');

// Telling React to take control of the #root element
const root = ReactDOM.createRoot(el);

// Showing the component on the browser
root.render(<App />);
