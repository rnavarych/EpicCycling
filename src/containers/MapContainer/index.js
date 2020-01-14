import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { connect } from 'react-redux'

import { server100 } from '../../services/mockdata'

class MapContainer extends React.PureComponent {
  render() {
    return (
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {server100.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(marker.latitude),
              longitude: parseFloat(marker.longitude)
            }}
            title={marker.the_geom.coordinates.title}
            description={marker.the_geom.map_label}
          />
        ))}
      </MapView>
    )
  }
}

const mapStateToProps = ({
  
}) => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)