'use strict';

let React = require('react-native');

let {
  View,
  StyleSheet
} = React;

const Router = require('./components/Router');

const App = () => {
	return (
		<View style={styles.app}>
			<Router store={require('./stores/RouteStore')}/>
		</View>
	);
};


let styles = StyleSheet.create({
	app: { marginTop: 22, flex: 1 }
});

module.exports = App;