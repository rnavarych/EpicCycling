import * as types from '../constants/actionTypes'
import * as endpoints from '../configs/endpoints'

export const getListOfStations = () => {
  return {
    endpoint: endpoints.getStations,
    method: 'GET',
    types: [
      types.LIST_OF_STATIONS_REQUEST,
      types.LIST_OF_STATIONS_SUCCESS,
      types.LIST_OF_STATIONS_FAILURE
    ]
  }
}