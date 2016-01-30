'use strict';

const React = require('react-native');

const {
  View,
  Text,
  TouchableOpacity,
	StyleSheet
} = React;

const Icon = require('react-native-vector-icons/MaterialIcons');

const defaultRenderIcon = (props) => {
  let {icon, iconColor, iconStyle} = props;
  return <Icon style={[styles.icon, iconStyle]} name={icon} color={iconColor}/>;
}
const defaultRenderText = (props) => {
  let {text, textStyle} = props;
  return <Text style={[styles.text, textStyle]}>{text}</Text>
}

const IconButton = (props) => {
  let { onPress, wrapStyle, mode } = props;
  let renderIcon = props.renderIcon || defaultRenderIcon;
  let renderText = props.renderText || defaultRenderText;
  if(mode === 'label'){
    return (
      <View style={[styles.container, wrapStyle]}>
        {renderIcon(props)}
        {renderText(props)}
      </View>
    );
  }else{
    return (
      <TouchableOpacity
        activeOpacity={0.3}
        style={[styles.container, wrapStyle]}
        onPress={onPress}>
        {renderIcon(props)}
        {renderText(props)}
      </TouchableOpacity>
    );  
  } 
}

/* Styles */

const {
  FONT_ICON,
  FONT_M_SIZE,
  PADDING_S_SIZE
} = require('../../constants/StyleConstants');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: FONT_ICON,
    width: FONT_ICON,
    textAlign: 'center'
  },
  text: {
    fontSize: FONT_M_SIZE,
    paddingLeft: PADDING_S_SIZE,
    alignSelf: 'center',
    flex: 1
  }
});

module.exports = IconButton;
