import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles';

const BicycleListHeader = (props) => {
  const { totalAmount } = props
  return (
    <View style={styles.container}>
      <Text>Bicycle Total: {totalAmount}</Text>
    </View>
  )
}

export default BicycleListHeader
