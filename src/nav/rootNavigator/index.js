import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { DrawerNavigator } from "../drawerNavigator";
import { APP_STACK, AUTH_STACK } from "../../constants/routes";
import { AuthStackNavigator } from "../authStack";
import { appStackNavigationOptions, authStackNavigatorOptions } from "../../utils/navigations";

export const createRootNavigator = (firstLaunch) => {
  return createAppContainer(
    createStackNavigator({
      [APP_STACK]: {
        screen: DrawerNavigator(),
        navigationOptions: appStackNavigationOptions
      },
      [AUTH_STACK]: {
        screen: AuthStackNavigator(),
        navigationOptions: authStackNavigatorOptions
      }
    }, {
      initialRouteName: firstLaunch ? AUTH_STACK : APP_STACK,
    })
  )
}