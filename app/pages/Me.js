'use strict';

let React = require('react-native');

let {
	View,
	Text,
	TouchableHighlight
} = React;

const Icon = require('react-native-vector-icons/Ionicons');

let styles = require('./Me.style');

const Avatar = require('../components/Avatar');
const PageMixin = require('./PageMixin');

const Bar = (props) => {
	let {icon, title, color, onPress} = props;
	return (
		<TouchableHighlight onPress={onPress} underlayColor="white">
			<View style={styles.bar}>
				<Icon name={icon} color={color} style={styles.barIcon}/>
				<Text style={styles.barText}>{title}</Text>
				<Icon name="ios-arrow-forward" style={styles.barArrow}/>
			</View>
		</TouchableHighlight>
	)
};

const Me = React.createClass({

	mixins: [PageMixin],

	getInitialState() {
		return {

		}
	},

	render(){
		let data = [
			{ title: "全部订单", color: '#fd9055', target: 'OrderList', icon: 'android-list'},
			{ title: "地址管理", color: '#349cf2', target: 'AddressList', icon: 'android-pin'},
			{ title: "我的喜欢", color: '#fc6875', target: 'OrderList', icon: 'heart'},
			{ title: "意见反馈", color: '#99d0ac', target: 'OrderList', icon: 'chatbubble-working'}
		];
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Avatar imageUrl="http://wx.qlogo.cn/mmopen/Q3auHgzwzM5nicORia5VjicDtiaBVEdhvShRu6iaIrrkg6T6uGxjMrQISADvW5Oib66tXXvArMxXFQJ92YcDYN7VtvrDe2VDCSRG2b6mUVfj0cQFo/0"/>
					<Text style={styles.login}>登录</Text>
				</View>
				<View style={styles.tabs}></View>
				<View style={styles.bars}>
					{data.map((item, i) => {
						return <Bar key={i} {...item} onPress={()=>this.goto(item.target)}/>
					})}
				</View>
			</View>
		)
	}

})

module.exports = Me;
