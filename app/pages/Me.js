'use strict';

let React = require('react-native');

let {
	View,
	Text
} = React;

let styles = require('../styles/mePage');

const Avatar = (props) => {
	return (
		<View style={styles.avatar}></View>
	)
};

const Bar = (props) => {
	let {icon, title} = props;
	return (
		<View style={styles.bar}>
			<Text style={styles.barText}>{title}</Text>
		</View>
	)
};

const Me = React.createClass({

	getInitialState() {
		return {

		}
	},

	render(){
		let data = ["全部订单", "地址管理", "我的喜欢", "意见反馈"];
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Avatar />
					<Text style={styles.login}>登录</Text>
				</View>
				<View style={styles.tabs}></View>
				<View style={styles.bars}>
					{data.map((item, i) => {
						return <Bar key={i} title={item}/>
					})}
				</View>
			</View>
		)
	}
})

module.exports = Me;