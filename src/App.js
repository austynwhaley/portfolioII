import "./App.css"
import React, { Component } from 'react';
import {Route} from "react-router-dom";
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
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/resume' component={Resume}/>
            </div>
      </div>
    )
  }
}

export default App;