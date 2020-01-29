import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function InformationText({text, style}) {
  return (
    <Text style={ [styles.text, style] }>{ text }</Text>
  )
}

export default InformationText;