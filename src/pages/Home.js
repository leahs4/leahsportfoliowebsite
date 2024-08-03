import React from 'react';
import logo from './logo.png';
import "./Home.css"
import 'animate.css'

const Home=()=>{
  return(
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo animate__animated animate__bounceInDown" alt="logo" />
        <p1 class= "animate__animated animate__bounceInDown main-text">Welcome to Leah Sun's Portfolio Website</p1>
        <p1 class= "animate__animated animate__bounceInDown main-text">(〜^∇^)〜</p1>
      </header>
    </div>
  );
}

export default Home;
