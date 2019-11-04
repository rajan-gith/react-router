import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu/Menu.js';
import About from './about/About.js';
import Contact from './contact/Contact.js';
import './menu/Menu.css'
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Welcome to react routing</h1>
      </div>
      <BrowserRouter>
        <div className="menu-container">
          <Menu/>
          <Route path="/" exact component = {Home} />
          <Route path="/about" component = {About} />
          <Route path="/contact" component = {Contact} />
        </div>
      </BrowserRouter>
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
