

import React, {Component} from 'react';
import store from './src/redux/store/index';
import {Provider} from 'react-redux';

import App from './src/components/App.component';


class Home extends Component {
  render () {
    return (
      <Provider store={store}> 
        <App />
      </Provider> 
    );
  }
}

export default Home;
