import React from "react";
import { Keyboard, Platform, SafeAreaView } from 'react-native';
import {theme} from '../constants/theme'
import { EMPTY_STRING } from "../constants/constants";

export function withSafeAreaView(Component, backgroundColor) {
  return (props) => {
    return <SafeAreaView style={ {flex: 1, backgroundColor: backgroundColor || theme.background} }
                         forceInset={ {bottom: 'never'} }>
      <Component { ...props } />
    </SafeAreaView>
  }
}

export function keyBoardShowListener(action) {
  return Platform.OS === 'ios'
    ? Keyboard.addListener('keyboardWillShow', () => action())
    : Keyboard.addListener('keyboardDidShow', () => action());
}

export function keyBoardHideListener(action) {
  return Keyboard.addListener('keyboardDidHide', () => action());
}

export function getThemeByValue(value) {
  return value === EMPTY_STRING ? theme.placeholder : theme.filledInput
};