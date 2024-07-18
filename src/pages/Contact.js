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
        <i className='bx bxl-linkedin linkedin-icon'></i>
        <p>For any inquiries please email me:</p>
        <i className='bx bxl-gmail gmail-icon'></i>
      </header>
    </div>
  );
}


export default Contact;