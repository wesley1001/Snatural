'use strict';

let React = require('react-native');

const {
	FONT_ICON,
	PADDING_X_SIZE,
	PADDING_M_SIZE,
	COLOR_MAIN,
	COLOR_BORDER
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},

	address: {
		marginTop: PADDING_X_SIZE,
		backgroundColor: 'white'
	},
	info: {
		height: 100
	},
	default: {
		backgroundColor: COLOR_MAIN,
		color: 'white'
	},
	addressText: {
		color: '#666',
		paddingBottom: PADDING_M_SIZE
	},

	operation: {
		borderTopWidth: 1,
		borderTopColor: COLOR_BORDER,
		flex: 1,
		flexDirection: 'row'
	},

	setDefault: {
		flex: 1
	},
	edit: {
		width: 100
	},
	delete: {
		width: 100
	},

	checked: {
		fontSize: FONT_ICON,
		color: COLOR_MAIN
	},
	unchecked: {
		fontSize: FONT_ICON
	},
	icon: {
		fontSize: FONT_ICON
	},

	btnAdd: {
		flex: 1,
		textAlign: 'center'
	}
});
