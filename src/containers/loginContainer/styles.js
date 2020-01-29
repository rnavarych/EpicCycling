import { StyleSheet } from 'react-native';
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '15%',
    alignItems: 'center'
  },
  informationContainer: {
    marginTop: 20
  },
  text: {
    color: theme.text,
    textAlign: 'center'
  },
  phoneContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  phoneText: {
    color: theme.text,
    fontWeight: '700'
  },
  clickArea: {
    padding: 10,
    marginRight: -20
  },
  pencilIcon: {
    height: 15,
    width: 20
  },
  codeInput: {
    marginVertical: 10,
    borderBottomColor: theme.text,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
    width: 100,
    paddingBottom: 10
  },
  indentation: {
    marginVertical: 20
  }
})

export default styles