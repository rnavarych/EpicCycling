import React from 'react'
import { Marker } from 'react-native-maps'

import DefaultCallout from '../defaultCallout';
import images from "../../../configs/images";

const DefaultMarker = (props) => {
  const { station, navigation } = props
  return (
    <Marker
      coordinate={{
        latitude: parseFloat(station.latitude),
        longitude: parseFloat(station.longitude)
      }}
      pinColor={'#E8682B'}
      title={station.the_geom.coordinates.title}
      description={station.the_geom.map_label}
    >
      <DefaultCallout station={station} navigation={navigation}/>
    </Marker>
  )
}

export default DefaultMarker
