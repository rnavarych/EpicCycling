import React from 'react'
import { View, Text, Platform, TouchableOpacity } from 'react-native'
import { Callout, CalloutSubview } from 'react-native-maps'

import styles from './styles'
import { strings } from '../../I18n'
import * as routes from '../../constants/routes'

const isIOS = Platform.OS === 'ios'

const DefaultCallout = (props) => {
  const { station, navigation } = props

  const getStationIDBasedOnENV = (station) => {
    //TODO: Should be deleted when the production API will be ready
    return __DEV__ ? station.asset_id : station.id
  }

  const Button = isIOS ? CalloutSubview : TouchableOpacity

  const OnPress = () => navigation.navigate(routes.STATION_INFO_SCREEN, { 
    stationID: getStationIDBasedOnENV(station)
  })

  return (
    <Callout onPress={isIOS ? null : OnPress} tooltip>
      <View style={styles.calloutContainer}>
        <Text style={styles.bicyclesAmountText}>{strings('total')}: {station.total_amount_of_bicycles}</Text>
        <Text style={styles.bicyclesAmountText}>{strings('available')}: {station.amount_of_bicycle_available}</Text>
        <Button
          style={isIOS ? styles.calloutButtonIOS : styles.calloutButtonAndroid} 
          onPress={OnPress}>
          <Text style={styles.buttonText}>{isIOS ? strings('seeDetails') : strings('tapToSeeDetails')}</Text>
        </Button>
      </View>
    </Callout>
  )
}

export default DefaultCallout
