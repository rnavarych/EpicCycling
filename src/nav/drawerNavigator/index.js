import { createDrawerNavigator } from "react-navigation-drawer";
import { mapStackNavigator } from "../MapStack";
import { MAP_STACK } from "../../constants/routes";
import { theme } from "../../constants/theme";
import React from "react";
import CustomDrawerComponent from "../../components/drawer/drawerComponent";
import images from "../../configs/images";

const drawerNavigator = () => (
  createDrawerNavigator({
      [MAP_STACK]: {
        screen: mapStackNavigator(),
        navigationOptions: {
          drawerIcon: images.map,
          drawerLabel: 'Map'
        }
      },
      'Screen2': {
        screen: () => null,
        navigationOptions: {
          drawerIcon: images.alert,
          drawerLabel: 'Screen2',
        },
      },
      'Screen3': {
        screen: () => null,
        navigationOptions: {
          drawerIcon: images.alert,
          drawerLabel: 'Screen3'
        }
      },
      'Screen4': {
        screen: () => null,
        navigationOptions: {
          drawerIcon: images.alert,
          drawerLabel: 'Screen4'
        }
      },
      'Screen5': {
        screen: () => null,
        navigationOptions: {
          drawerIcon: images.alert,
          drawerLabel: 'Screen5'
        }
      },
      'Screen6': {
        screen: () => null,
        navigationOptions: {
          drawerIcon: images.alert,
          drawerLabel: 'Screen6'
        }
      },
    },
    {
      contentComponent: props => <CustomDrawerComponent props={props}/>,
      drawerBackgroundColor: theme.primary,
      initialRouteName: MAP_STACK,
    })
)

export default drawerNavigator