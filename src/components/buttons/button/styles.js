import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%'
  },
  text: {
    color: theme.primaryText,
    fontSize: 16
  },
  disableButton: {
    backgroundColor: theme.primaryDisabled,
  },
  buttonContent: {
    flexDirection: 'row'
  },
  progress: {
    position: 'absolute',
    top:0,
    bottom: 0,
    right: '-25%'
  }
})

export default styles