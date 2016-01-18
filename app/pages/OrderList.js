/**
 * @fileOverview 订单列表页
 */

'use strict';

let React = require('react-native');

let {
	View,
	Text
} = React;

const styles = require('../styles/orderListPage');

const TabBar = require('../components/TabBar');
const PageMixin = require('./PageMixin');
const Order = require('../components/Order');

const {ORDER_STATUS} = require('../constants/OrderConstants');

let data = [{"orderId":"151130000421","totalPrice":285.0,"orderStatus":3,"createTime":1448883356000,"products":[{"productId":"0000000995","title":"Good Health 深海鱼油胶囊1500mg 400粒/瓶（2瓶）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448554281556.jpeg!200","price":285.0,"buyCount":1}]},{"orderId":"151129000201","totalPrice":420.0,"orderStatus":3,"createTime":1448803578000,"products":[{"productId":"0000000886","title":"Anchor安佳奶粉套装 3袋全脂+3袋脱脂","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1447154437435.png!200","price":420.0,"buyCount":1}]},{"orderId":"151129000191","totalPrice":420.0,"orderStatus":3,"createTime":1448803287000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151129000071","totalPrice":420.0,"orderStatus":7,"createTime":1448774139000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000751","totalPrice":858.0,"orderStatus":3,"createTime":1448549667000,"products":[{"productId":"0000000906","title":"Karicare可瑞康金装1段婴幼儿奶粉（6罐装）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448460776768.png!200","price":780.0,"buyCount":1}]},{"orderId":"151126000741","totalPrice":420.0,"orderStatus":3,"createTime":1448549170000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000201","totalPrice":420.0,"orderStatus":3,"createTime":1448521895000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000181","totalPrice":420.0,"orderStatus":3,"createTime":1448521647000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151126000161","totalPrice":420.0,"orderStatus":3,"createTime":1448521459000,"products":[{"productId":"0000000880","title":"Anchor安佳全脂成人奶粉 1KG（6袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448461650415.png!200","price":420.0,"buyCount":1}]},{"orderId":"151125000011","totalPrice":65.0,"orderStatus":6,"createTime":1448454392000,"products":[{"productId":"0000000894","title":"Parrs帕氏麦卢卡蜂胶蜂蜜皂140g 洗脸沐浴控油去痘手工皂","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1448453381271.jpeg!200","price":65.0,"buyCount":1}]}];

const OrderList = React.createClass({
  mixins: [PageMixin],

  getInitialState(){
    return {
      activeTab: 'all'
    }
  },

  render(){
    let {navigator, routes} = this.props;
    let {activeTab} = this.state;

    let data = [
    	{ title: '全部', key: 'all' },
    	{ title: '待支付', key: 'paying' },
    	{ title: '待收货', key: 'receiving' },
    	{ title: '已完成', key: 'complete' }
    ];

    return (
    	<View style={styles.container}>
    		<TabBar activeTabStyle={styles.activeTab} initalActive="all" tabPosition="top">
    			{data.map((item) => {
    				return (
  	  				<TabBar.Tab 
                key={item.key} 
                style={styles.tab}
                onPress={()=> this.setState({activeTab: item.key})}>
  	  				  <Text style={[styles.tabText, activeTab === item.key ? styles.activeTabText : null]}>
                  {item.title}
                </Text>
  	  				</TabBar.Tab>
    				);
    			})}
    			{data.map((item) => {
    				return (
  	  				<TabBar.View key={item.key}>
  	  				  <Text style={{flex: 1}}>{item.title}</Text>
  	  				</TabBar.View>
    				);
    			})}
    		</TabBar>
        {this._renderNavigatorBar()}
    	</View>
    );
  },

  componentDidMount() {
    this.fetchData();
  },

  fetchData(){
    this.state.data = data;
  }

});
module.exports = OrderList;