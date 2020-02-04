import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import styles from './styles';

function FloatingIcon({style, iconStyle, icon, onPress}) {
  return (
    <TouchableHighlight
      onPress={ onPress }
      style={ [styles.container, style] }
    >
      <Image style={ [styles.icon, iconStyle] } source={ icon }/>
    </TouchableHighlight>
  )
}

export default FloatingIcon;