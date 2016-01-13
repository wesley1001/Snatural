'use strict';

let React = require('react-native');

let {
	View,
	Text
} = React;

const Icon = require('react-native-vector-icons/FontAwesome');

let styles = require('../styles/mePage');

const Avatar = (props) => {
	return (
		<View style={styles.avatar}></View>
	)
};

const Bar = (props) => {
	let {icon, title, color} = props;
	return (
		<View style={styles.bar}>
			<Icon name={icon} color={color} style={styles.barIcon}/>
			<Text style={styles.barText}>{title}</Text>
			<Icon name="angle-right" style={styles.barArrow}/>
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
			{ title: "全部订单", icon: 'reorder', 		color: '#fd9055'},
			{ title: "地址管理", icon: 'map-marker', color: '#349cf2'},
			{ title: "我的喜欢", icon: 'heart', 			color: '#fc6875'},
			{ title: "意见反馈", icon: 'commenting', color: '#99d0ac'}
		];
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Avatar />
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