import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { theme } from "../../../constants/theme";

function ClickableText({styleContainer, style, onPress, text}) {
  return (
    <TouchableOpacity
      style={ [styleContainer] }
      onPress={ onPress }
    >
      <Text style={ [style, styles.text] }>{ text }</Text>
    </TouchableOpacity>
  )
}

export default ClickableText;