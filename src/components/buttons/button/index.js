import React from 'react';
import { TouchableHighlight, Text, View, Platform, ActivityIndicator } from 'react-native';
import styles from './styles';
import { theme } from "../../../constants/theme";

const INDICATOR_SIZE_ANDROID = 32;
const INDICATOR_SIZE_IOS = 'small';

function Button({style, onPress, label, disable, progressIndicator}) {
  return (
    <TouchableHighlight
      style={ [styles.container, disable && styles.disableButton, style] }
      underlayColor={ theme.primaryUnderlay }
      onPress={ disable ? null : onPress }
    >
      <View style={ styles.buttonContent }>
        <Text style={ styles.text }>{ label }</Text>
        { progressIndicator &&
        <ActivityIndicator
          style={styles.progress}
          color={theme.primaryText}
          size={ Platform.OS === 'ios' ? INDICATOR_SIZE_IOS : INDICATOR_SIZE_ANDROID }
        />
        }
      </View>
    </TouchableHighlight>
  )
}

export default Button;