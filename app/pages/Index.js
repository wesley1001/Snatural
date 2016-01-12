/**
 * @fileOverview 入口页
 */

'use strict';

let React = require('react-native');

let {
	View,
	Text,
  TouchableWithoutFeedback
} = React;

const styles = require('../styles/indexPage');

const Home = require('./Home');
const Me = require('./Me');

const Index = React.createClass({
  getInitialState() {
    return {
      homeDisplayed: true
    };
  },

  render() {
  	let { homeDisplayed } = this.state;
    let page = homeDisplayed ? 
      <Home navigator={this.props.navigator} routes={this.props.routes}/> :
      <Me navigator={this.props.navigator}  routes={this.props.routes}/>;
 
    return (
      <View style={styles.container}>
        <View style={styles.tabView}>
          {page}
        </View>
        <View style={styles.tabs}>
          <TouchableWithoutFeedback 
            key="tab:home" 
            onPress={() => this.setState({homeDisplayed: true})}>
            <View style={[styles.tab, homeDisplayed ? styles.activeTab : null]}>
              <Text style={styles.tabText}>首页</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            key="tab:me" 
            onPress={() => this.setState({homeDisplayed: false})}>
            <View style={[styles.tab, !homeDisplayed ? styles.activeTab : null]}>
              <Text style={styles.tabText}>我的</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
});

module.exports = Index;