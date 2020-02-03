import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import MapContainer from "../../containers/mapContainer";
import BicycleList from "../../containers/bicycleListContainer";
import { MAP_SCREEN, STATION_INFO_SCREEN } from "../../constants/routes";

export const MapStackNavigator = () => {
  return createStackNavigator({
      [MAP_SCREEN]: {
        screen: MapContainer,
      },
      [STATION_INFO_SCREEN]: {
        screen: BicycleList,
      },
    },
    {
      headerMode: 'none',
      initialRouteName: MAP_SCREEN,
    })
};