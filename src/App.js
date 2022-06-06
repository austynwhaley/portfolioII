import "./App.css"
import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"


import Home from './pages/Home/index';
import About from './pages/About/index';
import Projects from './pages/Projects/index';
import Resume from './pages/Resume/index';
  
  
class App extends Component {
  render() {
    return(
      <div className="App">
          <Navbar/>
            <div>
              <BrowserRouter exact path='/' component={Home}/>
              <BrowserRouter path='/about' component={About}/>
              <BrowserRouter path='/projects' component={Projects}/>
              <BrowserRouter path='/resume' component={Resume}/>
            </div>
      </div>
    )
  }
}

export default App;