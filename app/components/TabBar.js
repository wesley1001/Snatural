'use strict';

const React = require('react-native');
const styles = require('../styles/tabBar');

const {
  View,
  TouchableWithoutFeedback
} = React;

let Tabbar = React.createClass({
  propTypes: {
    activeTabStyle: React.PropTypes.number, // style number
    active: React.PropTypes.string
  },

  getInitialState() {
    return {
      active: this.props.active
    };
  },

  render(){
    let contents = this._createContents(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          {contents.views}
        </View>
        <View style={styles.tabContainer}>
          {contents.tabs}
        </View>
      </View>
    );
  },

  _createContents(props){
    let contents = {views:[], tabs:[]};
    React.Children.forEach(props.children, (child) => {
      if(child.type.displayName === 'Tabbar.View'){
        contents.views.push(this._createView(child.props.name, child))
      }else{
        contents.tabs.push(this._createTab(child.props.name, child))
      }
    });
    return contents;
  },
  _createView(name, element){
    let isActive = name === this.state.active;
    return React.cloneElement(element, {
      key: `view:${name}`,
      isActive
    });
  },
  _createTab(name, element){
    let isActive = name === this.state.active;
    return React.cloneElement(element, {
      key: `tab:${name}`,
      isActive,
      activeStyle: this.props.activeTabStyle,
      onPress: () => {
        this.setState({active: name})
      }
    });
  }
});

Tabbar.View = React.createClass({
  displayName: 'Tabbar.View',

  render(){
    let {children, isActive} = this.props;
    return (
      <View style={isActive ? styles.activeView : styles.inActiveView}>
        {React.Children.map(children, child => child )}
      </View>
    );
  }
});

Tabbar.Tab = React.createClass({
  displayName: 'Tabbar.Tab',

  render(){
    let {children, style, isActive, activeStyle, onPress} = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[ styles.tab, style, isActive ? activeStyle : null ]}>
          {React.Children.map(children, child => child )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

module.exports = Tabbar;
