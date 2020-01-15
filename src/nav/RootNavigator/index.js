import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MapContainer from '../../containers/MapContainer'
import BicycleList from '../../containers/BicycleList'
import BicycleDetails from '../../containers/BicycleDetails'

export const createRootNavigator = () => {
  return createAppContainer(
    createStackNavigator({
      MapScreen: {
        screen: MapContainer,
        navigationOptions: {
          title: 'Stations',
          headerTitleStyle: {
            color: '#324755'
          }
        }
      },
      BicycleListScreen: {
        screen: BicycleList,
        navigationOptions: {
          title: 'Station Details',
          headerTitleStyle: {
            color: '#324755'
          }
        }
      },
      //BicycleDetailsScreen: BicycleDetails
    },
    {
      initialRouteName: 'MapScreen',
    })
  )
}