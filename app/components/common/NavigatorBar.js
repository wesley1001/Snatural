/**
 * @fileOverview Loading
 */

'use strict';

let React = require('react-native');

let {
	View,
	Text,
	TouchableWithoutFeedback
} = React;

const Icon = require('react-native-vector-icons/Ionicons');

const styles = require('./NavigatorBar.style');

const NavigatorBar = (props) => {
	let {onBack} = props;
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={onBack}>
				<View style={styles.back}>
					<Icon name="chevron-left" style={styles.backIcon}/>
					<Text style={styles.backText}>返回</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

module.exports = NavigatorBar;