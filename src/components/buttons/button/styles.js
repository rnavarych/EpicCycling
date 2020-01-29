import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    paddingVertical: 20,
    alignItems: 'center',
    width: '90%'
  },
  text: {
    color: theme.primaryText,
    fontSize: 16
  }
})

export default styles