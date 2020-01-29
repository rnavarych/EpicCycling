import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../../containers/welcomeContainer";
import { WELCOME_SCREEN } from "../../constants/routes";
import { withSafeAreaView } from "../../utils/utils";

export const AuthStackNavigator = () => {
  return createStackNavigator({
    [WELCOME_SCREEN]: {
      screen: withSafeAreaView(WelcomeScreen),
      navigationOptions: {
        header: null
      }
    }
  }, {

  })
};