import { StyleSheet } from 'react-native';
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1
  },
  scrollContent: {
    flexGrow: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.text,
    marginVertical: 20
  },
  input: {
    width: '100%',
    textAlign: 'left'
  }
})

export default styles