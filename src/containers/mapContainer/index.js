import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'

import { getListOfStations } from '../../actions/stations'
import * as locations from '../../constants/locations'
import DefaultMarker from '../../components/defaultMarker';

class MapContainer extends React.PureComponent {

  componentDidMount() {
    this.props.getListOfStations()
  }

  render() {
    return (
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        provider={PROVIDER_GOOGLE}
        initialRegion={locations.sanFrancisco}
      >
        {this.props.listOfStations.map((station, index) => 
          <DefaultMarker
            key={String(index)}
            station={station}
            navigation={this.props.navigation}
          />
        )}
      </MapView>
    )
  }
}

const mapStateToProps = ({
  stations: {
    listOfStations
  }
}) => ({
  listOfStations
});

const mapDispatchToProps = dispatch => ({
  getListOfStations: () => dispatch(getListOfStations())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)