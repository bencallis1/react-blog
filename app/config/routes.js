import React from 'react';
import Home from '../components/Home/Home';
import  ProfileContainer from '../components/Profile-container/Profile-container';

import {Router, Route, IndexRoute} from 'react-router';

export default (
      <Route path="/" component={Home}>
          <Route path="profile/:username" component={ProfileContainer} />
          <IndexRoute component={Home} />
      </Route>
);