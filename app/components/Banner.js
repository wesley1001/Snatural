/**
 * @fileOverview 广告Banner
 */

'use strict';

let React = require('react-native');

let {
	View,
	Image
} = React;

const styles = require('./Banner.style');

const ImageSlider = require('./common/ImageSlider');

let data = [{imageUrl: 'https://img.alicdn.com/tps/i1/TB1.94dLpXXXXbfXFXXeRTP_XXX-1125-543.jpg_q30.jpg'},{imageUrl: 'https://img.alicdn.com/tps/i4/TB1pcX5LpXXXXawXXXXeRTP_XXX-1125-543.jpg_q30.jpg'}, {imageUrl: 'https://img.alicdn.com/imgextra/i3/2360209412/TB2phL.jpXXXXc5XXXXXXXXXXXX-2360209412.jpg_q30.jpg'}]

const Banner = (props) => {
	return (
		<View style={styles.container}>
			<ImageSlider>
				{data.map((item, i) => {
					return (
						<Image 
							key={'banner_'+i}
							source={{uri: item.imageUrl}}
							style={styles.image}
						/>
					);
				})}
			</ImageSlider>
		</View>
	)
};

module.exports = Banner;