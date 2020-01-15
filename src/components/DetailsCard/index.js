import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles';

const DetailsCard = (props) => {
  const { bicycle } = props
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.textInfoContainer}>
          <Text>Status: {bicycle.available ? 'Available' : 'Not available'}</Text>
          <Text>Model: {bicycle.model}</Text>
          <Text>Battery: {bicycle.battery}%</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            disabled={!bicycle.available}
            style={[
              bicycle.available ? styles.activeButtonStyle : styles.inactiveButtonStyle, 
              styles.buttonStyle
            ]}
            onPress={() => {}}>
              <Text>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DetailsCard
