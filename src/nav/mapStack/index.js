import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import MapContainer from "../../containers/mapContainer";
import BicycleList from "../../containers/bicycleListContainer";

export const MapStackNavigator = () => {
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
};