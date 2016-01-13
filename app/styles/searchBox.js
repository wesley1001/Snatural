'use strict';

let React = require('react-native');

const {
	PADDING_M_SIZE,
	PADDING_S_SIZE,
	COLOR_BORDER,
	FONT_ICON,
	FONT_M_SIZE
} = require('./variables');

module.exports = React.StyleSheet.create({
	container: {
		padding: PADDING_M_SIZE,
		marginLeft: PADDING_S_SIZE,
		marginRight: PADDING_S_SIZE
	},
	icon: {
		fontSize: FONT_ICON,
		color: '#999',
		position: 'absolute',
		top: 13,
		left: 15,
		backgroundColor: 'transparent'
	},
	textInput: {
		height: 35,
		borderColor: COLOR_BORDER,
		borderWidth: 1,
		borderRadius: PADDING_S_SIZE,
		backgroundColor: 'white',
		paddingLeft: 35,
		fontSize: FONT_M_SIZE - 2
	}
});