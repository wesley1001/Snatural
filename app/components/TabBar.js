/**
 * @fileOverview TabBar
 */

'use strict';

const React = require('react-native');

const styles = require('../styles/tabBar');
const {SCREEN_WIDTH} = require('../styles/variables');

const {
  View,
  TouchableWithoutFeedback
} = React;

let Tabbar = React.createClass({
  propTypes: {
    activeTabStyle: React.PropTypes.number, // style number
    initalActive: React.PropTypes.string, 
    tabPosition: React.PropTypes.oneOf(['top', 'bottom'])
  },

  getInitialState() {
    return {
      active: this.props.initalActive
    };
  },

  render(){
    let contents = this._createContents(this.props);
    let { topTabs, bottomTabs } = 
      this._renderTabs(this.props.tabPosition, contents.tabs);
    return (
      <View style={styles.container}>
        {topTabs}
        {contents.activeView}
        {bottomTabs}
      </View>
    );
  },

  _renderTabs(tabPosition, tabs){
    let tabContainer = (
      <View style={styles.tabContainer}>
        {tabs}
      </View> 
    );
    return tabPosition === 'top' ?
      { topTabs: tabContainer}:
      { bottomTabs: tabContainer};
  },

  _createContents(props){
    let contents = {activeView: null, tabs:[]};
    let active = this.state.active;
    React.Children.forEach(props.children, (child) => {
      if(!child) return;
      if(child.type.displayName === 'Tabbar.View'){
        if(child.key === active)
          contents.activeView = this._createView(child.key, child);
      }else{
        contents.tabs.push(this._createTab(child.key, child));
      }
    });
    return contents;
  },
  _createView(key, element){
    return (
      <View style={styles.viewContainer}>
        {element}
      </View>
    );
  },
  _createTab(key, element){
    return React.cloneElement(element, {
      key: `tab:${key}`,
      activeStyle: key === this.state.active ? this.props.activeTabStyle : null,
      onPress: () => {
        this._switchTo(key);
        element.props.onPress && element.props.onPress(key);
      }
    });
  },

  _switchTo(key){
    this.setState({active: key});
  }
});

Tabbar.View = React.createClass({
  displayName: 'Tabbar.View',
  render(){
    return React.Children.only(this.props.children);
  }
});

Tabbar.Tab = React.createClass({
  displayName: 'Tabbar.Tab',
  render(){
    let {onPress, activeStyle, children, style} = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[ styles.tab, style, activeStyle ]}>
          {React.Children.map(children, child => child )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

module.exports = Tabbar;
