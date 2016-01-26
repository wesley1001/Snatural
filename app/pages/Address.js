'use strict';

let React = require('react-native');

let {
	View,
	Text,
	TouchableHighlight
} = React;

const Icon = require('react-native-vector-icons/Ionicons');

let styles = require('./Address.style');

const PageMixin = require('./PageMixin');

const Address = React.createClass({

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

module.exports = Address;