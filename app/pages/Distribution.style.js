'use strict';

const React = require('react-native');

const {
	COLS,
	COLOR_MAIN,
	PADDING_M_SIZE,
	PADDING_S_SIZE,
	FONT_L_SIZE,
	HEIGHT_BAR
} = require('../constants/StyleConstants');


module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},
	stats: {
		backgroundColor: COLOR_MAIN,
		padding: PADDING_M_SIZE
	},

	statItem: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: PADDING_S_SIZE,
		paddingBottom: PADDING_S_SIZE
	},
	label: {
		color: 'white',
		textAlign: 'left',
		width: COLS[6]
	},
	number: {
		color: 'white',
		textAlign: 'right',
		flex: 1
	},
	important: {
		fontWeight: 'bold',
		fontSize: FONT_L_SIZE
	},

	operations: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: 'white'
	},
	iconButton: {
		width: COLS[6],
		paddingLeft: 2 * PADDING_M_SIZE,
		marginTop: PADDING_S_SIZE,
		marginBottom: PADDING_S_SIZE,
		backgroundColor: 'transparent'
	},
	iconStyle: {
		fontSize: 32,
		width: HEIGHT_BAR,
		height: HEIGHT_BAR,
		borderRadius: HEIGHT_BAR / 2,
		paddingTop: (HEIGHT_BAR - 32) / 2,
		color: 'white'
	},

	products: {
		flex: 1
	}
});
