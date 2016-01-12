'use strict';

let React = require('react-native');
let { StyleSheet, Dimensions } = React;
const WINDOW_WIDTH = Dimensions.get('window').width;

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbarView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentView: {
    flex: 1
  },
  // Move the view outside of the current viewport.
  contentViewDisplay: {
    flex: 1
    // position: 'absolute',
    // left: 0,
    // top: 0
  },
  contentViewHidden: {
    position: 'absolute',
    left: WINDOW_WIDTH,
    top: 0
  }
});

module.exports = styles;
