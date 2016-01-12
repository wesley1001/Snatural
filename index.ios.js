'use strict';

let React = require('react-native');

let {
  AppRegistry
} = React;

const App = require('./app/App');

const Snatural = () => {
  return <App />
};

AppRegistry.registerComponent('Snatural', () => Snatural);
