import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    marginLeft: 10
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: theme.primaryText
  },
  label: {
    color: theme.primaryText,
    marginLeft: 20,
    fontSize: 16
  },
  underline: {
    height: 1,
    backgroundColor: theme.primaryUnderlay
  }
})

export default styles