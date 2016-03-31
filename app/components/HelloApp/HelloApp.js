import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(({ mainStore }) => ({ mainStore }))
class HelloApp extends React.Component {
  render() {
    const {mainStore, dispatch} = this.props;

    return (
      <div>
        Hello 
      </div>
    );
  }
}

export default HelloApp;
