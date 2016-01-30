'use strict';

const React = require('react-native');

const {
	View,
	Text,
	TouchableHighlight
} = React;

const styles = require('./AddressEdit.style');

const PageMixin = require('./PageMixin');

const Shop = React.createClass({

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

module.exports = Shop;
