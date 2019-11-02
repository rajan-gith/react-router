import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu/Menu.js';
import About from './about/About.js';
import Contact from './contact/Contact.js';
import './menu/Menu.css'
import

function App() {
  return (
    <div>
      <div className="App">
        <h1>Welcome to react routing</h1>
      </div>
      <div className="menu-container">
        <Menu/>
        <Home/>
        <About/>
        <Contact/>
      </div>
    </div>
  );
}

const Home = (argument) => {
  return (
    <div className="home-container">
      <h2>Welcome to Home page.</h2>
    </div>
  )
}

export default App;
