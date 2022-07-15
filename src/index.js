import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main'
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <Footer />
  </React.StrictMode>
);