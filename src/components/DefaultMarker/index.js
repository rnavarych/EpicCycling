import React from 'react'
import { Marker } from 'react-native-maps'

import DefaultCallout from '../DefaultCallout';

const DefaultMarker = (props) => {
  const { station, navigation } = props
  return (
    <Marker
      coordinate={{
        latitude: parseFloat(station.latitude),
        longitude: parseFloat(station.longitude)
      }}
      title={station.the_geom.coordinates.title}
      description={station.the_geom.map_label}
    >
      <DefaultCallout station={station} navigation={navigation}/>
    </Marker>
  )
}

export default DefaultMarker
