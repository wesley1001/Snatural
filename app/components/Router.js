/**
 * @fileOverview 路由Router
 */

'use strict';

let React = require('react-native');

let {
	StyleSheet,
	View,
	Navigator,
	NavigatorIOS,
	Platform
} = React;

const renderIOSRouter = (store) => {
	let route = Object.assign(
		{passProps: { routes: store }},
		store[store.start]
	);
	return (
		<NavigatorIOS
			style={styles.container}
			initialRoute={route}
			navigationBarHidden={true}
			itemWrapperStyle={{backgroundColor: '#f1f1f1'}}
    />
	);
};

const renderAndroidRouter = (store) => {
	return (
		<Navigator
	    initialRoute={store[store.start]}
	    renderScene={(route, navigator) => {
	    	let {routes, params} = route.passProps;
	      return React.createElement(route.component, {
	      	navigator,
	      	routes,
	      	params
	      })
	    }}
	  />
	);
};

const Router = (props) => {
	let { store } = props;

	if(Platform.OS === 'ios'){
		return renderIOSRouter(store);	
	}else{
		return renderAndroidRouter(store);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

module.exports = Router;