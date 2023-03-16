import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-styles.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import { Home } from './pages/home';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <Footer/>
  </React.StrictMode>
);

