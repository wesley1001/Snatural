'use strict';

let React = require('react-native');

const {
	PADDING_M_SIZE,
	PADDING_S_SIZE,
	COLOR_BORDER
} = require('./variables');

module.exports = React.StyleSheet.create({
	container: {
		padding: PADDING_M_SIZE,
		marginLeft: PADDING_S_SIZE,
		marginRight: PADDING_S_SIZE
	},
	textInput: {
		height: 35,
		borderColor: COLOR_BORDER,
		borderWidth: 1,
		borderRadius: PADDING_S_SIZE,
		backgroundColor: 'white',
		paddingLeft: 32
	}
});