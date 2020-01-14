import * as types from '../constants/actionTypes';

let initialState = {
  listOfStations: [],
  getListOfStationsSuccess: null,
  error: null
}

const stations = (state = initialState, action) => {
  switch(action.type) {
    case types.LIST_OF_STATIONS_REQUEST: {
      return {
        ...state, 
        getListOfStationsSuccess: null
      }
    }
    case types.LIST_OF_STATIONS_SUCCESS: {
      return {
        ...state,
        listOfStations: action.result.data,
        getListOfStationsSuccess: true
      }
    }
    case types.LIST_OF_STATIONS_FAILURE: {
      return {
        ...state,
        errors: action.error,
        getListOfStationsSuccess: false
      }
    }
    default:
      return state
  }
}

export default stations