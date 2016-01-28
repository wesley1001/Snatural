'use strict';

let React = require('react-native');

const {
	COLOR_MAIN,
	COLOR_DARK,
	COLOR_BORDER,
	HEIGHT_BAR
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},

	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: HEIGHT_BAR,
		borderBottomWidth: 3,
		borderBottomColor: COLOR_BORDER,
		backgroundColor: 'white'
	},
	tabText: {
	},
	activeTab: {
		borderBottomColor: COLOR_MAIN
	},
	activeTabText: {
		color: COLOR_DARK
	}
});
