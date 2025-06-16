import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
 import { library } from '@fortawesome/fontawesome-svg-core';
 import reportWebVitals from './reportWebVitals';
 import { faBars,faShoppingCart,faBolt,faTimes,faBookOpen,faTags,faStar,faStarHalfAlt,faArrowLeft,faMagnifyingGlass,faSpinner } from '@fortawesome/free-solid-svg-icons';
library.add (faBars,faShoppingCart,faBolt,faTimes,faBookOpen,faTags,faStar,faStarHalfAlt,faArrowLeft,faMagnifyingGlass,faSpinner )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter >
    <App />
  </BrowserRouter >
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
