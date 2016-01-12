'use strict';

let React = require('react-native');

const {
	COLOR_MAIN,
	COLOR_BORDER,
	PADDING_M_SIZE,
	PADDING_L_SIZE,
	FONT_M_SIZE,
	FONT_S_SIZE
} = require('./variables');


module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		height: 128,
		backgroundColor: COLOR_MAIN,
		alignItems: 'center',
		padding: PADDING_L_SIZE
	},
	tabs: {
		height: 73,
		backgroundColor: 'white'
	},
	bars: {
		marginTop: 16,
		backgroundColor: 'white',
		padding: PADDING_M_SIZE
	},
	avatar: {
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: 'white'
	},
	login: {
		fontSize: FONT_M_SIZE,
		paddingTop: PADDING_M_SIZE,
		color: 'white'
	},
	bar: {
		borderBottomWidth: 1,
		borderBottomColor: COLOR_BORDER,
		paddingTop: PADDING_M_SIZE,
		paddingBottom: PADDING_M_SIZE,
		flexDirection: 'row'
	},
	barText: {
		fontSize: FONT_M_SIZE
	}
});