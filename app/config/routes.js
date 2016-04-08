import React from 'react';
import Home from '../components/Home/Home';
import  ProfileContainer from '../components/Profile-container/Profile-container';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default (
    <Router history={ hashHistory }>
          <Route path="/" component={Home}>
              <IndexRoute component={Home}></IndexRoute>
          </Route>
          <Route path="/profile/:userid" component={ProfileContainer}></Route>
    </Router>

);