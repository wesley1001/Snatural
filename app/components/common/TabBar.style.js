'use strict';

let React = require('react-native');

const {SCREEN_WIDTH} = require('../../constants/StyleConstants');

module.exports = React.StyleSheet.create({
  container: {
    flex: 1
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  view: {
    width: SCREEN_WIDTH
  },
  tabContainer: {
    height: 48,
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    height: 48
  }
});
