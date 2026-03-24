import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"


import Home from './pages/Home/index';
import About from './pages/About/index';
import Projects from './pages/Projects/index';
import Resume from './pages/Resume/index';
import Shop from './pages/Shop/index';
const App = () => {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop/' || location.pathname.includes('shop');
  
  return(
    <div className="App">
        {!isShopPage && <Navbar/>}
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about/' component={About}/>
            <Route exact path='/projects/' component={Projects}/>
            <Route exact path='/resume/' component={Resume}/>
            <Route exact path='/shop/' component={Shop}/>
          </Switch>
    </div>
  )
}

export default (App);