import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MapContainer from '../../containers/MapContainer'
import BicycleList from '../../containers/BicycleList'
import BicycleDetails from '../../containers/BicycleDetails'

export const createRootNavigator = () => {
  return createAppContainer(
    createStackNavigator({
      MapScreen: MapContainer,
      BicycleListScreen: BicycleList,
      //BicycleDetailsScreen: BicycleDetails
    },
    {
      initialRouteName: 'MapScreen',
    })
  )
}