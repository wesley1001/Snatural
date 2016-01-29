'use strict';

let React = require('react-native');

let {
  View,
  Text,
  TouchableHighlight,
	StyleSheet
} = React;

const Icon = require('react-native-vector-icons/Ionicons');

const IconButton = (props) => {
  return (
    <TouchableHighlight style={styles.setDefault}>
      <View style={styles.buttonWrap}>
        <Icon name="compose" style={styles.icon} /><Text>编辑</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({

});

module.exports = IconButton;
