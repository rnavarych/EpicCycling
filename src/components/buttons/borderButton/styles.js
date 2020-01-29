import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.primaryText,
    width: '60%',
    alignItems: 'center',
    paddingVertical: 20
  },
  label: {
    color: theme.primaryText,
    fontSize: 16
  }
})

export default styles