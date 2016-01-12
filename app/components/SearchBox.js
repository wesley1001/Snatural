/**
 * @fileOverview 首页搜索框
 */

'use strict';

let React = require('react-native');

let {
	View,
	TextInput
} = React;

const styles = require('../styles/searchBox');

const SearchBox = React.createClass({
	getInitialState(){
		return {
			searchWord: ''
		}
	},

	render(){
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					autoCorrect={false}
					onChangeText={this._onChangeText}
					onSubmitEditing={this._onSubmitEditing}
				/>
			</View>
		);
	},

	_onChangeText(text){
		this.state.searchWord = text;
	},

	_onSubmitEditing(){
		this.props.onSearch(this.state.searchWord);
	}
});

module.exports = SearchBox;