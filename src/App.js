import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {withRouter} from 'react-router';


import Home from './pages/Home/index';
import About from './pages/About/index';
import Projects from './pages/Projects/index';
import Resume from './pages/Resume/index';
  
  
class App extends Component {
  render() {
    return(
      <div className="App">
              <Route exact path ="/" component={Home}/>
              <Route path ="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/resume" component={Resume}/>
      </div>
    )
  }
}

export default withRouter(App);