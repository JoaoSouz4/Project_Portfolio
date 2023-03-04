import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-styles.css';
import { Home } from './pages/home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <Home/>
    <Footer/>
  </React.StrictMode>
);

