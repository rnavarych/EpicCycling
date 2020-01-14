import * as types from '../constants/actionTypes'
import * as urls from '../configs/urls'

export const getListOfStations = () => {
  return {
    endpoint: 'https://asdsad.com',
    method: 'GET',
    types: [
      types.LIST_OF_STATIONS_REQUEST,
      types.LIST_OF_STATIONS_SUCCESS,
      types.LIST_OF_STATIONS_FAILURE
    ]
  }
}