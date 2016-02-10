'use strict';

const React = require('react-native');

const {
	View,
	Text,
	Image
} = React;

const styles = require('./Shop.style');
const PageMixin = require('./PageMixin');
const Avatar = require('../components/Avatar');
const IconButton = require('../components/common/IconButton');

let shopData = {"memberId":3,"faceUrl":"http://zxs-image.b0.upaiyun.com/shop/1454433211636940.jpeg","name":"棉花爹的店铺","notice":"请设置公告","coverUrl":"http://zxs-image.b0.upaiyun.com/shop/1454433225344651.jpeg","createTime":1448454249000,"updateTime":1454433225000,"operator":"3"};
let funcData = [
	{ title: "店铺设置", color: '#98d1ad', target: 'OrderList', icon: 'settings'},
	{ title: "分享店铺", color: '#98d1ad', target: 'OrderList', icon: 'share'},
	{ title: "查看店铺", color: '#98d1ad', target: 'OrderList', icon: 'search'}
];

const Shop = React.createClass({

	mixins: [PageMixin],

	getInitialState() {
		return {

		}
	},

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.header}>

					<Image 
						style={styles.cover}
						source={{uri: shopData.coverUrl}}>
						<Avatar
							style={styles.avatar}
							imageUrl={shopData.faceUrl}/>
						<View style={styles.desc}>
							<Text style={styles.name}>{shopData.name}</Text>
							<Text style={styles.notice}>{shopData.notice}</Text>
						</View>
					</Image>

					<View style={styles.functions}>
						{funcData.map((item, i) => {
							return (
								<IconButton
									key={i}
									icon={item.icon}
									iconColor={item.color}
									text={item.title}
									wrapStyle={styles.iconButton}
									iconStyle={styles.iconStyle}
									onPress={() => this.goto(item.target)}
								/>
							);
						})}
					</View>
				</View>
			
				<View style={styles.contents}>
				</View>

				{this._renderNavigatorBar()}
			</View>
		)
	}

})

module.exports = Shop;
