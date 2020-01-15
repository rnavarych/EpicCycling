import React from 'react'
import { View, Text } from 'react-native'
import { Callout, CalloutSubview } from 'react-native-maps'

import styles from './styles'
import * as routes from '../../constants/routes'

const DefaultCallout = (props) => {
  const { station, navigation } = props

  const getStationIDBasedOnENV = (station) => {
    //TODO: Should be deleted when the production API will be ready
    return __DEV__ ? station.asset_id : station.id
  }

  return (
    <Callout tooltip>
      <View style={styles.calloutContainer}>
        <Text style={styles.bicyclesAmountText}>Total: {station.total_amount_of_bicycles}</Text>
        <Text style={styles.bicyclesAmountText}>Available: {station.amount_of_bicycle_available}</Text>
        <CalloutSubview
          style={styles.calloutButton} 
          onPress={() => navigation.navigate(routes.STATION_INFO_SCREEN, { 
            stationID: getStationIDBasedOnENV(station)
          })}>
          <Text style={styles.buttonText}>See Details</Text>
        </CalloutSubview>
      </View>
    </Callout>
  )
}

export default DefaultCallout
