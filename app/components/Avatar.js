/**
 * @fileOverview Avatar 头像
 */

'use strict';

const React = require('react-native');

const {
	View,
	Image
} = React;

const styles = require('./Avatar.style');

const Avatar = (props) => {
	let { imageUrl } = props;
	imageUrl = imageUrl || 'http://snatural.com.cn/weixin/assets/images/avatar.png';
	return (
		<View style={styles.container}>
			<Image 
				style={styles.image} 
				source={{uri: imageUrl}}
			/>
		</View>
	);
};

module.exports = Avatar;