import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MapContainer from '../../containers/MapContainer'
import BicycleList from '../../containers/BicycleList'

import { strings } from '../../I18n'

export const createRootNavigator = () => {
  return createAppContainer(
    createStackNavigator({
      MapScreen: {
        screen: MapContainer,
        navigationOptions: {
          title: strings('stations'),
          headerTitleStyle: {
            color: '#324755'
          }
        }
      },
      BicycleListScreen: {
        screen: BicycleList,
        navigationOptions: {
          title: strings('stationDetails'),
          headerTitleStyle: {
            color: '#324755'
          }
        }
      },
    },
    {
      initialRouteName: 'MapScreen',
    })
  )
}