
'use strict';

let React = require('react-native');

const {
	COLOR_DARK,
	COLOR_MAIN
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
		backgroundColor: COLOR_MAIN
	},
	tabText: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
		marginTop: 22
	},
	activeTab: {
		backgroundColor: COLOR_DARK
	}
});