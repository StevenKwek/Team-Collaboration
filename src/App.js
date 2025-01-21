import React from 'react';
import logo from './images/Logo_Kawachud.svg';
import './App.css';
import logo2 from './images/content home.svg';
import About from './about.js';
import button1 from './images/button help.svg';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="menu">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">contact</a>
        </div>
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
      </nav>

      <div className="content">
      <img src={logo2} alt="Home Content" className="content-image" />
      <img src={button1} alt="Button Content" className="content-image2" />
        {/* <button className="help-button">yes, pls help</button> */}
      </div>

      <About></About>
    </div>
  );
}

export default App;
