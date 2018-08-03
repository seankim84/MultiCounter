import React, { Component } from 'react';
import Buttons from './components/Button'; 
import CounterListContainer from './containers/CounterListContainer'

import {connect} from 'react-redux';
import * as actions from './modules';

import { getRandomColor } from './utils';

class App extends Component {
  render() {
    const {onCreate, onRemove} = this.props;
    return (
      <div>
        <Buttons 
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: (index) => dispatch(actions.remove(index)) 
});

export default connect(null, mapDispatchToProps)(App);
