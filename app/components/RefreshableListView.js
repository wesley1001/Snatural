/**
 * @fileOverview Loading
 */

'use strict';

let React = require('react-native');

let {
	View,
	Text,
	ListView
} = React;

const styles = require('../styles/refreshableListView');

const RefreshableListView = React.createClass({

	getInitalState(){
		return {
			
		}
	},

	render() {
		return (
			<ListView
				renderFooter={this._renderFooter}

				onEndReached={this._onEndReached}
				onEndReachedThreshold={30}

				initialListSize={5}
				pageSize={5}

				style={styles.list}
			/>
		);
	}
});

module.exports = RefreshableListView;