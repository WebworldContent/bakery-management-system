import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/style.css';
import '../src/assets/css/style.scss';
import '../src/assets/css/responsive.css';
import '../src/assets/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);