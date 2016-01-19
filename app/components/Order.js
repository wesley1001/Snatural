/**
 * @fileOverview 订单列表页
 */

'use strict';

let React = require('react-native');

let {
  Image,
	View,
	Text
} = React;

const styles = require('../styles/order');
const { ORDER_STATUS_TEXT } = require('../constants/OrderConstants');

const formatTime = (timestamp) => {
  let date = new Date(timestamp);
  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
}

const Order = (props) => {
  let {orderStatus, createTime, orderId, products} = props;
  let firstProduct = products[0];
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.status}>{ORDER_STATUS_TEXT[orderStatus]}</Text>
        <View style={styles.info}>
          <Text style={styles.orderId}>订单号: {orderId}</Text>
          <Text style={styles.createTime}>{formatTime(createTime)}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Image
          style={styles.productImage}
          uri={firstProduct.imageUrl}/>
        <View style={styles.detail}>
          <Text style={styles.title}>{firstProduct.title}</Text>
          <View style={styles.buyInfo}>
            <Text style={styles.price}>{firstProduct.price}</Text>
            <Text style={styles.buyCount}>{firstProduct.buyCount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

module.exports = Order;
