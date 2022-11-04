import React from 'react';
// import '../assets/base.css';
// import '../assets/index.css';

export default function Navabar(){
    return(
        <nav className='nav-bar'>
            <div className="container-nav">
                <div className="brand">
                    <h2>Design System</h2>
                </div>
                <div>
                    <ul>
                        <li><a href="#" className="nav-item">Get Started</a></li>
                        <li><a href="#" className="nav-item">Foundations</a></li>
                        <li><a href="#" className="nav-item">Components</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}