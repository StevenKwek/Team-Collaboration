// import logo from './logo.svg';
import React from 'react';
import logo from './images/Logo_Kawachud.png'
import './App.css';
import SectionBaru from './about.js';
import logo2 from './images/content home.svg'

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
        <button className="help-button">yes, pls help</button>
      </div>

      <SectionBaru></SectionBaru>
    </div>
  );
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
