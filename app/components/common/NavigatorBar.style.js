'use strict';

let React = require('react-native');

const {
	COLOR_MAIN,
	FONT_L_SIZE,
	FONT_ICON,
	PADDING_M_SIZE,
	PADDING_S_SIZE,
	HEIGHT_BAR
} = require('../../constants/StyleConstants');

module.exports = React.StyleSheet.create({
	container: {
		height: HEIGHT_BAR,
		backgroundColor: COLOR_MAIN,
		flexDirection: 'row',
		alignItems: 'center'
	},
	back: {
		height: HEIGHT_BAR,
		width: 120,
		flexDirection: 'row',
		alignItems: 'center'
	},
	backIcon: {
		height: FONT_ICON,
		lineHeight: FONT_ICON,
		width: FONT_ICON - PADDING_S_SIZE,
		fontSize: FONT_ICON,
		color: 'white',
		marginLeft: PADDING_M_SIZE
	},
	backText: {
		fontSize: FONT_L_SIZE,
		color: 'white'
	}
});
