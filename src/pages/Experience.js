import React from 'react';
import {useEffect} from 'react';
import "./Experience.css"

const Experience=()=>{
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
    <div className="experience-page">
      <header className="App-experience">
        <h1 className="animate__animated animate__zoomIn">Experience</h1>
      </header>

      <div className="projects-section">
        <div className="projects">
          <h1 className="animate__animated animate__zoomIn">Projects</h1>
          <div className="buttons-container">
            <a href="https://leahhsun.notion.site/Discord-Bot-fa591e2074124b0dbf61707f2461726e" className="button animate__animated animate__zoomIn" target="_blank" rel="noopener norefferer">
              ExcuserBot Discord Bot 2023
            </a>
            <a href="https://devpost.com/software/munch-rh24a6" className="button animate__animated animate__zoomIn" target="_blank" rel="noopener noreferrer"> 
              Hack@UCI 2023 Winner: Munch
            </a>
            <a href="https://devpost.com/software/property-guessr" className="button animate__animated animate__zoomIn" target="_blank" rel="noopener noreferrer"> 
              Hack@UCI 2024: Property Guessr
            </a>
            <a href="https://devpost.com/software/tubetastic" className="button animate__animated animate__zoomIn" target="_blank" rel="noopener norefferer">
              LA Hacks 2024: TubeTasTic
            </a>
          </div>
        </div>
        <div className="resume">
          <h1 className="animate__animated animate__zoomIn">Resume</h1>
          <i className='bx bxs-file-pdf animate__animated animate__zoomIn'></i>
        </div>
      </div>
    </div>
  );
}

export default Experience;
