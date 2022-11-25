import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
 import { ToastContainer} from "react-toastify";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer  position='top-center'/>
    <App />
  </React.StrictMode>
);


reportWebVitals();
