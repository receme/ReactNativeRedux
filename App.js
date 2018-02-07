import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore'; //Import the store
import HomeConnector from './src/screens/home/HomeConnector'; //Import the component file

const store = configureStore({});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeConnector />
      </Provider>
    );
  }
};