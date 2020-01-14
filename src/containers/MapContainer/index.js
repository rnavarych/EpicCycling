import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout, CalloutSubview } from 'react-native-maps'
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
        {server100.map((station, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(station.latitude),
              longitude: parseFloat(station.longitude)
            }}
            title={station.the_geom.coordinates.title}
            description={station.the_geom.map_label}
          >
            <Callout tooltip>
              <View style={{ 
                borderWidth: 1,
                borderColor: '#f9f9f9',
                width: 150, 
                height: 70, 
                justifyContent: 'center', 
                backgroundColor: 'white' , 
                borderRadius: 10 
                }}>
                <Text style={{ marginBottom: 5, fontSize: 20, alignSelf: 'center' }}>140</Text>
                <CalloutSubview
                  style={{ alignSelf: 'center', backgroundColor: '#a0ee90', borderRadius: 5 }} 
                  onPress={() => this.props.navigation.navigate('BicycleListScreen')}>
                  <Text>See Available Bicycles</Text>
                </CalloutSubview>
              </View>
            </Callout>
          </Marker>
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