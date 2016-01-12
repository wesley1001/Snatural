'use strict';

let React = require('react-native');

let {
  View,
  Platform
} = React;

const Router = require('./components/Router');

const App = () => {
	let style = Platform.OS === 'ios' ? {marginTop: 22, flex: 1} : {flex: 1};
	return (
		<View style={style}>
			<Router store={require('./stores/RouteStore')}/>
		</View>
	);
};

module.exports = App;