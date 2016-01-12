'use strict';

let React = require('react-native');

const { 
	FONT_X_SIZE
} = require('./variables');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: FONT_X_SIZE,
		textAlign: 'center',
		marginTop: 40
	},
	spinner: {
		marginTop: 40
	}
});