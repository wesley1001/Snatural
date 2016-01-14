/**
 * @fileOverview TabBar
 */

'use strict';

const React = require('react-native');

const styles = require('../styles/tabBar');
const {SCREEN_WIDTH} = require('../styles/variables');

const {
  View,
  ScrollView,
  ViewPagerAndroid,
  TouchableWithoutFeedback,
  Platform
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
    let contents = this._createContents(this.props);
    if(Platform.OS === 'ios'){
      return (
        <View style={styles.container}>
          <ScrollView
            horizontal
            pagingEnabled
            directionalLockEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.viewContainer}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            ref={viewPager => { this.viewPager = viewPager; }}>
            {contents.views}
          </ScrollView>
          <View style={styles.tabContainer}>
            {contents.tabs}
          </View>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <ViewPagerAndroid
            style={styles.viewContainer}
            initialPage={0}
            onPageSelected={this._onPageSelected}
            ref={viewPager => { this.viewPager = viewPager; }}>
            {contents.views}
          </ViewPagerAndroid>
          <View style={styles.tabContainer}>
            {contents.tabs}
          </View>
        </View>
      );
    }
  },

  _onMomentumScrollEnd(e) {
    let activeIndex = e.nativeEvent.contentOffset.x / SCREEN_WIDTH;
    this.setState({active: this.activeMapping[activeIndex]});
  },

  _onPageSelected(e){
    this.setState({active: this.activeMapping[e.nativeEvent.position]});
  },

  _createContents(props){
    let contents = {views:[], tabs:[]};
    // build the mapping between active page index and active tab name
    this.activeMapping = [];
    let activeIndex = 0;

    React.Children.forEach(props.children, (child) => {
      if(!child) return;
      if(child.type.displayName === 'Tabbar.View'){
        this.activeMapping[activeIndex++] = child.props.name;
        contents.views.push(this._createView(child.props.name, child))
      }else{
        contents.tabs.push(this._createTab(child.props.name, child))
      }
    });
    return contents;
  },
  _createView(name, element){
    return (
      <View key={`view:${name}`} style={styles.view}>
        {element}
      </View>
    );
  },
  _createTab(name, element){
    let isActive = name === this.state.active;
    return React.cloneElement(element, {
      key: `tab:${name}`,
      isActive,
      activeStyle: this.props.activeTabStyle,
      onPress: () => this._switchTo(name)
    });
  },

  _switchTo(name){
    let page = 0;
    for(let index in this.activeMapping){
      if(name === this.activeMapping[index]){
        page = index;
        break;
      }
    }
    if(Platform.OS === 'ios'){
      this.viewPager.scrollTo(0, page * SCREEN_WIDTH);
    }else{
      this.viewPager.setPage(page);
    }
    this.setState({active: name});
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
