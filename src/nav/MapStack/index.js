import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import MapContainer from "../../containers/MapContainer";
import BicycleList from "../../containers/BicycleList";

export const mapStackNavigator = () => {
  return createStackNavigator({
      MapScreen: {
        screen: MapContainer,
      },
      BicycleListScreen: {
        screen: BicycleList,
      },
    },
    {
      headerMode: 'none',
      initialRouteName: 'MapScreen',
    })
}