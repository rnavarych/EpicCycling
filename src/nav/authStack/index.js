import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../../containers/welcomeContainer";
import {
  BASIC_USER_INFO_SCREEN,
  EDIT_PHONE_SCREEN,
  LOGIN_SCREEN,
  WELCOME_SCREEN
} from "../../constants/routes";
import { withSafeAreaView } from "../../utils/utils";
import LoginScreen from "../../containers/loginContainer";
import { theme } from '../../constants/theme'
import React from "react";
import { basicUserInfoOptions, editPhoneOptions, loginScreenNavigationOptions } from "../../utils/navigations";
import EditPhoneScreen from "../../containers/editPhoneContainer";
import BasicUserInformationScreen from "../../containers/baseUserInfoContainer";

export const AuthStackNavigator = () => {
  return createStackNavigator({
    [WELCOME_SCREEN]: {
      screen: withSafeAreaView(WelcomeScreen, theme.primary),
      navigationOptions: {
        headerShown: false
      }
    },
    [LOGIN_SCREEN]: {
      screen: withSafeAreaView(LoginScreen),
      navigationOptions: loginScreenNavigationOptions
    },
    [EDIT_PHONE_SCREEN]: {
      screen: withSafeAreaView(EditPhoneScreen),
      navigationOptions: editPhoneOptions
    },
    [BASIC_USER_INFO_SCREEN]: {
      screen: withSafeAreaView(BasicUserInformationScreen),
      navigationOptions: basicUserInfoOptions
    }
  }, {
    initialRouteName: WELCOME_SCREEN
  })
};