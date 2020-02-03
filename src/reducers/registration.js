import * as types from '../constants/actionTypes';
import { EMPTY_STRING } from "../constants/constants";

let initialState = {
  code: EMPTY_STRING,
  phone: EMPTY_STRING,
  userInfo: null,
  user: null
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
    case types.SAVE_BASE_USER_INFO: {
      return {
        ...state,
        userInfo: {
          username: action.user.username,
          email: action.user.email
        }
      }
    }
    case types.SAVE_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case types.CLEAR_USER: {
      return {
        ...state,
        userInfo: null,
        user: null
      }
    }
    default:
      return state
  }
}

export default registration