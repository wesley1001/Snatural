/**
 * @fileOverview Loading
 */

'use strict';

let React = require('react-native');

let {
	View,
	Platform,
	ActivityIndicatorIOS,
	ProgressBarAndroid
} = React;

const styles = require('../styles/loading');

const Loading = (props) => {
	if(Platform.OS === 'ios'){
		return (
			<View style={styles.container}>
				<ActivityIndicatorIOS
			    animating={true}
			    style={styles.spinner}
			    size="large"
				 />
			</View>
		);
	}else{
		return (
			<View style={styles.container}>
				<ProgressBarAndroid
			    styleAttr="Inverse"
			    style={styles.spinner}
				 />
			</View>
		);
	}
};

module.exports = Loading;