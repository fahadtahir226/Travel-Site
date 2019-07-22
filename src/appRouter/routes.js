import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import PageBody from '../Components/PageBody/PageBody';
import About from '../Components/About/about.js';
import Itinary from '../Components/Itinary/Itinary.js';

const AppRouter = () => {
    return (
        
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PageBody} exact />
          <Route path="/about" component={About} exact />
          <Route path="/itinary" component={Itinary} exact />
        </Switch>
      </BrowserRouter>
    );
  
  };
  
  export default AppRouter;
  