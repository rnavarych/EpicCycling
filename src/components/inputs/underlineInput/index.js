import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { theme } from "../../../constants/theme";

function UnderlineInput({style, onChangeText, placeholder, underlineColor, value, onFocus, keyboardType = 'default'}) {
  return (
    <TextInput
      style={[styles.codeInput, style, {borderBottomColor: underlineColor}]}
      placeholder={placeholder}
      placeholderColor={theme.placeholder}
      onChangeText={onChangeText}
      value={value}
      onFocus={onFocus}
      keyboardType={keyboardType}
    />
  )
}

export default UnderlineInput;