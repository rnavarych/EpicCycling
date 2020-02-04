import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 20,
    padding: 10,
    backgroundColor: theme.primary,
    flex: 1
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 15,
    height: 15,
  },
  text: {
    color: theme.primaryText,
    fontSize: 15,
    paddingHorizontal: 5
  }
});

export default styles