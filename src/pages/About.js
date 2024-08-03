import React from 'react';
import './About.css';
import aboutpic from '../hawaiisoftserve.jpg';
import 'animate.css'

const About = () => {
  return (
    <div className="about-page">
      <header className="App-about">
        <h1 class="animate__animated animate__zoomIn">About Me</h1>
      </header>

      <div className="about-container">
        <div className="about-text-container">
          <p class="animate__animated animate__zoomIn">
            Hi! My name is Leah Sun and I am a Junior at UCI studying Computer Science and Psychology. I pride myself in being a hard worker, resilient, and most importantly,
            highly organized. I enjoy solving complex problems, whether that be in my code, or in the games I play ᵔ ᵕ ᵔ.
          </p>
          <p class="animate__animated animate__zoomIn">During my free time, I enjoy rock climbing, as well as playing games such as League of Legends & Stardew Valley. I would say I am a huge foodie, I love eating
          all sorts of bread, although I try to stay away from it. I also really enjoy traveling, hiking, and exploring new terrain.</p>
        </div>
        <div className="about-image-container">
          <img src={aboutpic} className="about-image animate__animated animate__zoomIn" alt="About Me" />
        </div>
      </div>
    </div>
  );
}

export default About;
