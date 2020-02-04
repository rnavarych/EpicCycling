import { StyleSheet } from 'react-native';
import { CARD_HEIGHT, CARD_WIDTH } from "../../../constants/constants";
import {theme} from '../../../constants/theme'

const styles = StyleSheet.create({
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: theme.primary,
    marginHorizontal: 10,
    shadowColor: theme.text,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    color: theme.primaryText,
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: theme.primaryText,
  },
})

export default styles