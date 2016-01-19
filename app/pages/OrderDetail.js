'use strict';

let React = require('react-native');

let {
  View,
  Text,
  Image
} = React;

let styles = require('./Me.style');

const Order = require('../components/Order');
const PageMixin = require('./PageMixin');


const Address = (props) => {
  let {consignee, phone, province, city, district, detail} = props;
  return (
    <Image
      source={require('../resources/address.png')}
      style={styles.addressBackground}>
      <Text style={styles.addressText}>收货人：{consignee} {phone}</Text>
      <Text style={styles.addressText}>{province}{city}{district}{detail}</Text>
    </Image>
  );
}

const OrderDetail = React.createClass({

  mixins: [PageMixin],

  getInitialState() {
    return {
      data: {"orderId":"160110000321","totalPrice":220.0,"orderStatus":7,"createTime":1452438791000,"address":{"province":"上海市","city":"市辖区","district":"卢湾区","detail":"天山西路","consignee":"测试","phone":"18214261802","idCard":"360103199010135323","zipCode":null},"packages":[{"products":[{"productId":"0000000887","title":"Anchor安佳全脂成人奶粉 1KG/袋（3袋）","imageUrl":"http://zxs-image.b0.upaiyun.com/product/1447126666916.jpeg!200","price":220.0,"buyCount":1}],"pkgStatus":0,"waybillNumber":null,"packageId":null}],"comment":"麻烦在双休日送货，派个帅气的小哥，呵呵呵呵。还有发票要打个给我。","price":220.0,"postage":0.0,"tariff":0.0}
    }
  },

  render(){
    let data = this.state.data;
    return (
      <View style={styles.container}>
        <View style={styles.orderInfo}>
          <Text style={styles.info}>
            <Text style={styles.label}>订单时间：</Text>
            {data.createTime}
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>订单总额：</Text>
            <Text style={styles.strong}>{data.totalPrice}</Text>
          </Text>
          <Text style={styles.info}>
            <Text style={styles.label}>订单号：</Text>
            {data.orderId}
          </Text>
        </View>
        <Address {...data.address} />
        <Order {...data}/>
        <View style={styles.comment}>
          <Text style={styles.title}>备注</Text>
          <Text style={styles.commentContent} numberOfLines={1}>{data.comment}</Text>
        </View>
        <View style={styles.bars}>
          <Text style={styles.bar}>
            <Text style={styles.title}>商品总金额</Text>
            <Text style={styles.content}>￥{data.totalPrice}</Text>
          </Text>
          <Text style={styles.bar}>
            <Text style={styles.title}>运费</Text>
            <Text style={styles.content}>￥{data.postage}</Text>
          </Text>
          <Text style={styles.bar}>
            <Text style={styles.title}>关税</Text>
            <Text style={styles.content}>￥{data.tariff}</Text>
          </Text>
        </View>
      </View>
    );
  }

})

module.exports = OrderDetail;
