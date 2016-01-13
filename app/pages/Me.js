'use strict';

let React = require('react-native');

let {
	View,
	Text
} = React;

const Icon = require('react-native-vector-icons/Ionicons');

let styles = require('../styles/mePage');

const Avatar = require('../components/Avatar');

const Bar = (props) => {
	let {icon, title, color} = props;
	return (
		<View style={styles.bar}>
			<Icon name={icon} color={color} style={styles.barIcon}/>
			<Text style={styles.barText}>{title}</Text>
			<Icon name="ios-arrow-forward" style={styles.barArrow}/>
		</View>
	)
};

const Me = React.createClass({

	getInitialState() {
		return {

		}
	},

	render(){
		let data = [
			{ title: "全部订单", color: '#fd9055', icon: 'android-list'},
			{ title: "地址管理", color: '#349cf2', icon: 'android-pin'},
			{ title: "我的喜欢", color: '#fc6875', icon: 'heart'},
			{ title: "意见反馈", color: '#99d0ac', icon: 'chatbubble-working'}
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
						return <Bar key={i} {...data[i]}/>
					})}
				</View>
			</View>
		)
	}
})

module.exports = Me;