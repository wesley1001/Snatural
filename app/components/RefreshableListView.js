/**
 * @fileOverview 下拉刷新列表 RefreshableListView
 */

'use strict';

let React = require('react-native');

let {
	View,
	Text,
	ListView
} = React;

const styles = require('../styles/refreshableListView');

const Loading = require('./Loading');

const RefreshableListView = React.createClass({

  propTypes: {
    onRefresh: React.PropTypes.func,
    onInfinite: React.PropTypes.func,
    // initialDataSource: React.PropTypes.object.isRequired
  },

	getInitialState(){
		return {
			infiniting: false,
			dataSource: this.props.initialDataSource
		}
	},

	render() {
		return (
			<ListView
				renderFooter={this._renderFooter}
				onEndReached={this._onEndReached}
				onEndReachedThreshold={20}
				automaticallyAdjustContentInsets={false}
				initialListSize={3}
				pageSize={3}
				style={styles.list}
				{...this.props}
			/>
		);
	},

	_renderFooter(){
		if(this.state.infiniting){
			return <Loading />
		}else{
			return null;
		}
	},

	_onResponderGrant(e){
		//let nativeEvent = e.nativeEvent;
		//console.log(nativeEvent);
		//if(nativeEvent.contentOffset)
	},

	_onEndReached(){
		this.setState({
			infiniting: true
		})
		this.props.onInfinite(this._finishInfinite);
	},

	_finishInfinite(){
		this.setState({
			infiniting: false
		})
	},

	updateDataSource(dataSource){
		this.setState({
			dataSource: dataSource
		})
	}
});

module.exports = RefreshableListView;