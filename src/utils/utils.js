import React from "react";
import { SafeAreaView } from 'react-native';
import {theme} from '../constants/theme'

export function withSafeAreaView(Component, backgroundColor) {
  return (props) => {
    return <SafeAreaView style={ {flex: 1, backgroundColor: backgroundColor || theme.background} }
                         forceInset={ {bottom: 'never'} }>
      <Component { ...props } />
    </SafeAreaView>
  }
}