'use strict';

let React = require('react-native');

let {
	View,
	Text,
	TouchableHighlight
} = React;

let styles = require('./AddressEdit.style');

const PageMixin = require('./PageMixin');

const AddressEdit = React.createClass({

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

module.exports = AddressEdit;
