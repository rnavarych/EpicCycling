import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native'
import images from '../../../configs/images'
import styles from './styles'

function NavigationDrawerStructure({navigationProps}) {
  const toggleDrawer = () => {
    navigationProps.toggleDrawer();
  };

  return (
    <View style={ styles.container }>
      <TouchableOpacity onPress={ toggleDrawer }>
        <Image
          source={ navigationProps.state.isDrawerOpen ? images.down_arrow : images.drawer }
          style={ styles.icon }
        />
      </TouchableOpacity>
    </View>
  );
}

export default NavigationDrawerStructure