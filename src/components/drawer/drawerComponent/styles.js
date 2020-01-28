import { StyleSheet } from 'react-native';
import { theme } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 20
  },
  profileIcon: {
    width: 35,
    height: 35,
    tintColor: theme.tintColor
  },
  profileDescriptionContainer: {
    marginLeft: 20
  },
  profileUsernameLabel: {
    color: theme.primaryText,
    paddingVertical: 5,
    fontSize: 16
  },
  profileLabel: {
    color: theme.primaryText,
    paddingVertical: 3,
    marginLeft: 5,
    fontSize: 14
  },
  underline: {
    height: 1,
    backgroundColor: theme.primaryText
  },
  touchableArea: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15
  },
  logout: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.primaryText
  },
  drawerContent: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

export default styles