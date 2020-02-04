import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

function MapPointDescription({station}) {
  return (
    <View style={ styles.card }>
      <View style={ styles.textContent }>
        <Text numberOfLines={ 1 } style={ styles.cardtitle }>{ station.the_geom.type }</Text>
        <Text numberOfLines={ 1 } style={ styles.cardDescription }>{ station.map_label }</Text>
      </View>
    </View>
  )
}

export default MapPointDescription;