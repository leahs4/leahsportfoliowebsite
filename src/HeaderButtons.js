import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './HeaderButtons.css';
import 'animate.css';

const HeaderButtons=()=>{
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav=()=>{
    setIsNavOpen(!isNavOpen);
  }

  const closeNav=()=>{
    setIsNavOpen(false);
  }
  
  return(
    <header className="header">
      <nav>
        <div className="hamburger" onClick={toggleNav}>
          &#9776;
        </div>
        <ul className={`nav-list ${isNavOpen ? 'open animate__animated animate__fadeIn' : ''}`}>
          <li><Link to="/home" className="nav-button" onClick={closeNav}>Home</Link></li>
          <li><Link to="/about" className="nav-button" onClick={closeNav}>About Me</Link></li>
          <li><Link to="/experience" className="nav-button" onClick={closeNav}>Experience</Link></li>
          <li><Link to="/contact" className="nav-button" onClick={closeNav}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderButtons;
