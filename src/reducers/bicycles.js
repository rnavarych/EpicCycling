import * as types from '../constants/actionTypes';

let initialState = {
  listOfBicycles: [],
  getListOfBicycleSuccess: null,
  errors: null
}

const bicycles = (state = initialState, action) => {
  switch(action.type) {
    case types.LIST_OF_BICYCLES_REQUEST: {
      return {
        ...state, 
        getListOfBicycleSuccess: null
      }
    }
    case types.LIST_OF_BICYCLES_SUCCESS: {
      return {
        ...state,
        listOfBicycles: action.result.data,
        getListOfBicycleSuccess: true
      }
    }
    case types.LIST_OF_BICYCLES_FAILURE: {
      return {
        ...state,
        errors: action.error,
        getListOfBicycleSuccess: false
      }
    }
    default:
      return state
  }
}

export default bicycles