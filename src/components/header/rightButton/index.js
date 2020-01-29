import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';

function HeaderRightButton({onPress, icon}) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Image style={styles.icon} source={icon}/>
    </TouchableOpacity>
  )
}

export default HeaderRightButton;