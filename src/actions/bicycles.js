import * as types from '../constants/actionTypes'
import * as endpoints from '../configs/endpoints'

export const getListOfBicycles = (stationID) => {
  return {
    endpoint: endpoints.getStationInfo(stationID),
    method: 'GET',
    types: [
      types.LIST_OF_BICYCLES_REQUEST,
      types.LIST_OF_BICYCLES_SUCCESS,
      types.LIST_OF_BICYCLES_FAILURE
    ]
  }
}