'use strict';

let React = require('react-native');

const { SCREEN_WIDTH } = require('./variables');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1
  },
  viewContainer: {
    flex: 1
  },
  view: {
    flex: 1
  },
  inActiveView: {
    position: 'absolute',
    top: 0,
    left: SCREEN_WIDTH
  },
  tabContainer: {
    height: 48,
    flexDirection: 'row'
  },
  tab: {
    flex: 1
  }
});
