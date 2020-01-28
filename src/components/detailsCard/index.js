import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles';
import { strings } from '../../I18n'

const DetailsCard = (props) => {
  const { bicycle } = props
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.textInfoContainer}>
          <Text>{strings('descriptions.status')}: {bicycle.available ? strings('descriptions.available') : strings('descriptions.notAvailable')}</Text>
          <Text>{strings('descriptions.model')}: {bicycle.model}</Text>
          <Text>{strings('descriptions.battery')}: {bicycle.battery}%</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={!bicycle.available}
            style={[
              bicycle.available ? styles.activeButtonStyle : styles.inactiveButtonStyle, 
              styles.buttonStyle
            ]}
            onPress={() => {}}>
              <Text>{strings('descriptions.book')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailsCard
