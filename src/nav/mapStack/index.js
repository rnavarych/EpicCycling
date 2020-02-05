import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import MapContainer from "../../containers/mapContainer";
import BicycleList from "../../containers/bicycleListContainer";
import { MAP_SCREEN, QR_CODE_SCANNER_SCREEN, STATION_INFO_SCREEN } from "../../constants/routes";
import QRCodeScannerScreen from "../../containers/qrCodeScannerContainer";

export const MapStackNavigator = () => {
  return createStackNavigator({
      [MAP_SCREEN]: {
        screen: MapContainer,
      },
      [STATION_INFO_SCREEN]: {
        screen: BicycleList,
      },
      [QR_CODE_SCANNER_SCREEN]: {
        screen: QRCodeScannerScreen
      }
    },
    {
      headerMode: 'none',
      initialRouteName: MAP_SCREEN,
    })
};