import { StyleSheet } from 'react-native';
import { CARD_WIDTH, width } from "../../constants/constants";
import { theme } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  scanButton: {
    bottom: 30
  },
  iconInfo: {
    backgroundColor: theme.background,
    tintColor: theme.text,
    borderRadius: 20,
    borderColor: theme.text,
    borderWidth: 3
  },
  floatingButtonContainer: {
    position: 'absolute',
    right: 25,
    top: 25
  },
  infoMargin: {
    marginTop: 20
  }
})

export default styles