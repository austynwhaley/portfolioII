import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/system.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/index';
import About from './pages/About/index';
import Projects from './pages/Projects/index';
import Resume from './pages/Resume/index';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about/' component={About} />
        <Route exact path='/projects/' component={Projects} />
        <Route exact path='/resume/' component={Resume} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
