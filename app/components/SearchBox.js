/**
 * @fileOverview 首页搜索框
 */

'use strict';

let React = require('react-native');

let {
	View,
	TextInput
} = React;

const Icon = require('react-native-vector-icons/FontAwesome');

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
					placeholder="请输入商品名称"
					onChangeText={this._onChangeText}
					onSubmitEditing={this._onSubmitEditing}
				/>
				<Icon name="search" style={styles.icon}/>
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