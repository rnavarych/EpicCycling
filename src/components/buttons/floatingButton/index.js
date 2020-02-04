import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import styles from './styles';
import { theme } from "../../../constants/theme";

function FloatingButton({style, icon, text, iconStyle, onPress}) {
  return (
    <TouchableHighlight
      style={ [styles.container, style] }
      underlayColor={ theme.primaryUnderlay }
      onPress={ onPress }>
      <View style={ styles.content }>
        { icon && <Image style={ [styles.icon, iconStyle] } source={ icon }/> }
        { text && <Text style={ styles.text }>{ text }</Text> }
      </View>
    </TouchableHighlight>
  )
}

export default FloatingButton;