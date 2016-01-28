'use strict';

let React = require('react-native');

let {
	View,
	Text,
	TouchableHighlight
} = React;

let styles = require('./Distribution.style');

const PageMixin = require('./PageMixin');

let statistics = { lastMonthIncome: 1200, lastMonthSales: 110, notSettledSales: 220, thisMonthIncome: 330, thisMonthSales: 550 };

const Distribution = React.createClass({

	mixins: [PageMixin],

	getInitialState() {
		return {

		}
	},

	render(){
		return (
			<View style={styles.container}>

			</View>
		)
	}

})

module.exports = Distribution;
