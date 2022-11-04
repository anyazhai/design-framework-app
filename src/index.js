import React from 'react';
import './assets/base.css';
import './assets/index.css';
import Navbar from './components/navbar'
import Buttonsdoc from './components/buttonsdoc';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Navbar/>
        <div className='container'>
            <Buttonsdoc/>
        </div>
    </div>
)