import * as types from '../constants/actionTypes'
import * as urls from '../configs/urls'

export const getListOfBicycles = () => {
  return {
    endpoint: 'https://asdsad.com',
    method: 'GET',
    types: [
      types.LIST_OF_BICYCLES_REQUEST,
      types.LIST_OF_BICYCLES_SUCCESS,
      types.LIST_OF_BICYCLES_FAILURE
    ]
  }
}