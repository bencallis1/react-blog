import React from 'react';

import createStore from 'lib/createStore';
import { Provider } from 'react-redux';

import Nav from 'components/Nav/Nav';

const store = createStore();

class App extends React.Component {
  render() {
    return (
      <Provider {...{ store }}>
        { () => <Nav/>}
      </Provider>
    );
  }
}

export default App;
