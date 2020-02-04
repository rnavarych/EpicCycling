import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.text,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: theme.text,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: theme.background
  }
});

export default styles