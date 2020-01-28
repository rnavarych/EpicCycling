import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 5,
    tintColor: theme.tintColor
  }
})

export default styles