'use strict';

let React = require('react-native');

const {
	COLOR_MAIN,
	COLOR_LIGHT,
	PADDING_M_SIZE
} = require('./variables');

module.exports = React.StyleSheet.create({
	container: {
		flex: 1
	},
	head: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: COLOR_LIGHT,
		height: 48
	},
	status: {
		textAlign: 'left',
		color: COLOR_MAIN
	},
	info: {
		textAlign: 'right'
	},
	orderId: {
		textAlign: 'right',
		color: COLOR_MAIN
	},
	createTime: {
		textAlign: 'right',
		color: COLOR_MAIN
	},
	body: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white'
	},
	productImage: {
		width: 160,
		height: 160
	},
	detail: {
		flex: 1
	},
	title: {
		flex: 1,
		paddingBottom: PADDING_M_SIZE
	},
	buyInfo: {
		flexDirection: 'row'
	},
	price: {
		fontWeight: 'bold',
		textAlign: 'left'
	},
	buyCount: {
		textAlign: 'right'
	}
});
