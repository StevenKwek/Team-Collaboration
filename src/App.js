// import logo from './logo.svg';
import logo from './images/Logo_Kawachud.png'
import './App.css';

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
        <h1>
          SO YOU SUCK AT <br />
          HANDLING YOUR <br />
          <span>SOCIAL MEDIA?</span>
        </h1>
        <button className="help-button">yes, pls help</button>
      </div>
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
