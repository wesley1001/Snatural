'use strict';

let React = require('react-native');

let {
  TouchableHighlight,
  Text,
	StyleSheet
} = React;

const Button = (props) => {
	let {onPress, text} = props;
	return (
		<TouchableHighlight onPress={onPress}>
			<Text style="styles.button">{text}</Text>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({

});

module.exports = Button;
