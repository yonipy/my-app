import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/navbar.css'
import './css/page.css'
import Navbar from './componets/Main Page/navbar';
import Page from './componets/Main Page/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Page />
  </React.StrictMode>
);


