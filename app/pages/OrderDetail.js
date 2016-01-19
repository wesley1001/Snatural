'use strict';

let React = require('react-native');

let {
  View,
  Text
} = React;

let styles = require('./Me.style');

const Order = require('../components/Order');
const PageMixin = require('./PageMixin');

const OrderDetail = React.createClass({

  mixins: [PageMixin],

  getInitialState() {
    return {

    }
  },

  render(){
    return (
      <View style={styles.container}>
        <Order />
      </View>
    );
  }

})

module.exports = OrderDetail;