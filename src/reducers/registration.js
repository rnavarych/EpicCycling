import * as types from '../constants/actionTypes';
import { EMPTY_STRING } from "../constants/constants";

let initialState = {
  code: EMPTY_STRING,
  phone: EMPTY_STRING
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