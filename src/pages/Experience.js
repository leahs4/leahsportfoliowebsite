import React from 'react';
import "./Experience.css"

const Experience=()=>{
  return(
    <div class="experience-page">
      <header className="App-experience">
        <h1 class="animate__animated animate__zoomIn">Experience</h1>
      </header>

      <header className="projects">
        <h1 class="animate__animated animate__zoomIn">Projects</h1>
        <h1 class="animate__animated animate__zoomIn">Resume</h1>
      </header>


      <div class="experience-container">  
        
        <li>
          <a href="https://devpost.com/software/munch-rh24a6" className="button-01" target="_blank" rel="noopener noreferrer"> 
            Hack@UCI 2023 Winner: Munch
          </a>
        </li>
        <li>
          <a href="https://devpost.com/software/property-guessr" className="button-02" target="_blank" rel="noopener noreferrer"> 
            Hack@UCI 2024: Property Guessr
          </a>
        </li>
        
      </div>
        
    </div>
  );
}

export default Experience;

