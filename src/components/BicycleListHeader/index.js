import React from 'react'
import { View, Text } from 'react-native'

import { strings } from '../../I18n'
import styles from './styles';

const BicycleListHeader = (props) => {
  const { totalAmount } = props
  return (
    <View style={styles.container}>
      <Text>{strings('bicycleTotal')}: {totalAmount}</Text>
    </View>
  )
}

export default BicycleListHeader
