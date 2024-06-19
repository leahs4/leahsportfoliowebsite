// Header.jsx

import React from 'react';
import './HeaderButtons.css'; // Import your CSS file for styling (if using external CSS)

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li><button className="nav-button">Home</button></li>
                    <li><button className="nav-button">About Me</button></li>
                    <li><button className="nav-button">Experience</button></li>
                    <li><button className="nav-button">Contact</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
