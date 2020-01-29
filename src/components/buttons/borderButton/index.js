import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import { theme } from "../../../constants/theme";

function BorderButton({style, onPress, label}) {
  return (
    <TouchableHighlight
      onPress={ onPress }
      underlayColor={ theme.primaryUnderlay }
      style={ [style, styles.container] }>
      <Text style={ styles.label }>{ label }</Text>
    </TouchableHighlight>
  )
}

export default BorderButton;