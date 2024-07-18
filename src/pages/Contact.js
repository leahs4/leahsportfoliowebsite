import React, { useEffect } from 'react';
import "./Contact.css";

const Contact=()=>{
  useEffect(()=>{
    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return()=>{
      document.head.removeChild(link);
    };
  }, []);

  return(
    <div>
      <header className="App-contact">
        <h1>Contact Me</h1>
        <p>Please feel free to connect with me on LinkedIn!</p>
        <a href="https://www.linkedin.com/in/leahsun08/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <i className='bx bxl-linkedin-square'></i>
        </a>
        <p>For any inquiries please email me:</p>
        <a href="mailto:leahs4@uci.edu" className="gmail-icon">
          <i className='bx bxl-gmail'></i>
        </a>
      </header>
    </div>
  );
}


export default Contact;