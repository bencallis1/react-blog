import React from 'react';
import Home from '../components/Home/Home';

import {Router, Route, IndexRoute} from 'react-router';

export default (
      <Route path="/" component={Home}>
        <IndexRoute component={Home} />
      </Route>

);