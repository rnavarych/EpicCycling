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
          <Text>{strings('status')}: {bicycle.available ? strings('available') : strings('notAvailable')}</Text>
          <Text>{strings('model')}: {bicycle.model}</Text>
          <Text>{strings('battery')}: {bicycle.battery}%</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={!bicycle.available}
            style={[
              bicycle.available ? styles.activeButtonStyle : styles.inactiveButtonStyle, 
              styles.buttonStyle
            ]}
            onPress={() => {}}>
              <Text>{strings('book')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailsCard
