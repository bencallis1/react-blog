import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home/Home';
import About from '../components/Home/Home';


import {Router, Route, IndexRoute} from 'react-router';

export default (
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
          <Route path="about">{About}</Route>
      </Route>

);