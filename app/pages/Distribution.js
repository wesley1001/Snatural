'use strict';

let React = require('react-native');

let {
	View,
	Text,
	TouchableHighlight
} = React;

let styles = require('./AddressEdit.style');

const PageMixin = require('./PageMixin');

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
