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

const OrderList = React.createClass({
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
    	</View>
    );
  }
});
module.exports = OrderList;