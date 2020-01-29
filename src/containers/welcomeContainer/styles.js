import { StyleSheet } from 'react-native';
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
    alignItems: 'center',
    marginVertical: 20
  },
  logo: {
    width: 200,
    height: 100
  },
  firstLabel: {
    marginVertical: 10
  },
  secondLabel: {
    textAlign: 'center',
    marginHorizontal: 40,
    marginVertical: 15
  },
  buttonContainer: {
    marginTop: 15
  }
})

export default styles