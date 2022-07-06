import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n.js';
import Details from './components/Details.js';
import {
  BrowserRouter,
  Routes,
  Router,
  Route,
} from "react-router-dom";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// {/* <React.StrictMode>
// <App />
// </React.StrictMode> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
