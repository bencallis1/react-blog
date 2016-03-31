import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './Nav.css'

@connect(({ mainStore }) => ({ mainStore }))
class HelloApp extends React.Component {
  render() {
    const {mainStore, dispatch} = this.props;

    return (
        <header className="header">
          <nav>
            Something
          </nav>
        </header>

    );
  }
}

export default HelloApp;
