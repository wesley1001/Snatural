/**
 * @fileOverview Loading
 */

'use strict';

let React = require('react-native');

let {
	View,
	Text
} = React;

const styles = require('../styles/loading');

const Loading = (props) => {
	let androidIndicator = (
		<Text style={styles.text}>Loading...</Text>
	);
	// let iosIndicator = (
	// 	<ActivityIndicatorIOS
	//     animating={true}
	//     style={styles.spinner}
	//     size="large"
	// 	 />
	// );

	return (
		<View style={styles.container}>
			{androidIndicator}
		</View>
	);
};

module.exports = Loading;