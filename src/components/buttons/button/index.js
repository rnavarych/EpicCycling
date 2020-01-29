import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import { theme } from "../../../constants/theme";

function Button({style, onPress, label}) {
  return (
    <TouchableHighlight
      style={[styles.container, style]}
      underlayColor={ theme.primaryUnderlay }
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableHighlight>
  )
}

export default Button;