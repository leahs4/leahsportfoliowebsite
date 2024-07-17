import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderButtons.css'; // Import your CSS file for styling

const HeaderButtons=()=>{
  return(
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/home" className="nav-button">Home</Link></li>
          <li><Link to="/about" className="nav-button">About Me</Link></li>
          <li><Link to="/experience" className="nav-button">Experience</Link></li>
          <li><Link to="/contact" className="nav-button">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderButtons;
