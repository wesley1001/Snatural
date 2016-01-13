
'use strict';

let React = require('react-native');

const {
	COLOR_DARK,
	COLOR_MAIN,
	FONT_ICON,
	FONT_S_SIZE
} = require('./variables');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},
	tabView: {
		flex: 1	
	},
	tabs: {
		flexDirection: 'row'
	},
	tab: {
		flex: 1,
		height: 48,
		backgroundColor: COLOR_MAIN,
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabIcon: {
		fontSize: FONT_ICON
	},
	tabText: {
		color: 'white',
		textAlign: 'center',
		fontSize: FONT_S_SIZE
	},
	activeTab: {
		backgroundColor: COLOR_DARK
	}
});