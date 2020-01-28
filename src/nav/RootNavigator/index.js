import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import drawerNavigator from "../drawerNavigator";
import NavigationDrawerStructure from "../../components/drawer/navigatorDrawerStructure";
import LogoTitle from "../../components/logoTitle";
import images from "../../configs/images";
import { theme } from "../../constants/theme";
import { APP_STACK } from "../../constants/routes";

export const createRootNavigator = (firstLaunch) => {
  //todo use firstLaunch to show login screen
  return createAppContainer(
    createStackNavigator({
      [APP_STACK]: {
        screen: drawerNavigator(),
        navigationOptions: navigationOptions
      }
    }, {
      initialRouteName: APP_STACK,
    })
  )
}

const navigationOptions = ({navigation}) => ({
  headerLeft: () =>  <NavigationDrawerStructure navigationProps={ navigation }/>,
  headerTitle: () => <LogoTitle source={ images.logo }/>,
  headerStyle: {
    backgroundColor: theme.primary,
  },
  headerTintColor: theme.tintColor,
})