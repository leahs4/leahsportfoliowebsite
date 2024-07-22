import React from 'react';
import "./Experience.css"

const Experience=()=>{
  return(
    <div className="experience-page">
      <header className="App-experience">
        <h1 className="animate__animated animate__zoomIn">Experience</h1>
      </header>

      <div className="projects-section">
        <div className="projects">
          <h1 className="animate__animated animate__zoomIn">Projects</h1>
          <div className="buttons-container">
            <a href="https://devpost.com/software/munch-rh24a6" className="button" target="_blank" rel="noopener noreferrer"> 
              Hack@UCI 2023 Winner: Munch
            </a>
            <a href="https://devpost.com/software/property-guessr" className="button" target="_blank" rel="noopener noreferrer"> 
              Hack@UCI 2024: Property Guessr
            </a>
            <a href="https://devpost.com/software/tubetastic" className="button" target="_blank" rel="noopener norefferer">
              LA Hacks 2024: TubeTasTic
            </a>
          </div>
        </div>
        <div className="resume">
          <h1 className="animate__animated animate__zoomIn">Resume</h1>
        </div>
      </div>
    </div>
  );
}

export default Experience;
