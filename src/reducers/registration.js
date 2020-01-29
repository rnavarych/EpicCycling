import * as types from '../constants/actionTypes';

let initialState = {
  code: '',
  phone: ''
}

const registration = (state = initialState, action) => {
  switch(action.type) {
    case types.SAVE_PHONE_NUMBER: {
      return {
        ...state,
        code: action.code,
        phone: action.phone
      }
    }
    default:
      return state
  }
}

export default registration