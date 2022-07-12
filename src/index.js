import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/navbar.css'
import './css/page.css'
import './css/footer.css'
import Navbar from './componets/Main Page/navbar';
import Page from './componets/Main Page/page';
import Footer from './componets/Main Page/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Page />
    <Footer />
  </React.StrictMode>
);


