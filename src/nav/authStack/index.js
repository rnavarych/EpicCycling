import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../../containers/welcomeContainer";
import { LOGIN_SCREEN, WELCOME_SCREEN } from "../../constants/routes";
import { withSafeAreaView } from "../../utils/utils";
import LoginScreen from "../../containers/loginContainer";
import { theme } from '../../constants/theme'
import React from "react";
import { loginScreenNavigationOptions } from "../../utils/navigations";

export const AuthStackNavigator = () => {
  return createStackNavigator({
    [WELCOME_SCREEN]: {
      screen: withSafeAreaView(WelcomeScreen),
      navigationOptions: {
        headerShown: false
      }
    },
    [LOGIN_SCREEN]: {
      screen: withSafeAreaView(LoginScreen, theme.background),
      navigationOptions: loginScreenNavigationOptions
    }
  }, {
    initialRouteName: WELCOME_SCREEN
  })
};