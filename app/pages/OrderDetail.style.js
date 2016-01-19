'use strict';

let React = require('react-native');

const {
	PADDING_X_SIZE,
	PADDING_M_SIZE,
	COLOR_MAIN
} = require('../constants/StyleConstants');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},

	orderInfo:{
		backgroundColor: COLOR_MAIN,
		padding: PADDING_M_SIZE
	},
	info:{
		flexDirection: 'row'
	},
	label:{
		width: 70,
		justifyContent: 'justify'
	},
	strong:{
		fontWeight: 'bold'
	},

	address: {
		flex: 1,
		marginTop: PADDING_X_SIZE
	},
	addressBackground: {
		flex: 1
	},
	addressText: {
		flex: 1
	},

	comment: {
		marginTop: PADDING_X_SIZE,
		padding: PADDING_M_SIZE
	},
	bars:{
		flex: 1,
		marginTop: PADDING_X_SIZE
	},
	bar: {
		flex: 1,
		flexDirection: 'row',
		padding: PADDING_M_SIZE
	},
	title: {
		width: 70,
		textAlign: 'left'
	},
	content: {
		textAlign: 'right',
		fontWeight: 'bold'
	},
	commentContent: {
		textAlign: 'right'
	}
});
