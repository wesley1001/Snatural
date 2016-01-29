'use strict';

let React = require('react-native');

let {
	StyleSheet
} = React;

const Icon = require('react-native-vector-icons/Ionicons');

const RadioButton = (props) => {
	if (props.selected) {
		return <Icon name="checkmark-circled" style={styles.checked} />
	} else {
		return <Icon name="ios-circle-outline" style={styles.unchecked} />
	}
};

const styles = StyleSheet.create({

});

module.exports = RadioButton;
