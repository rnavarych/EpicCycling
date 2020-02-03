import * as types from "../constants/actionTypes";

export const savePhoneNumber = (code, phone) => {
  return {
    type: types.SAVE_PHONE_NUMBER,
    code,
    phone
  }
};

export const saveUserInfo = (user) => {
  return {
    type: types.SAVE_BASE_USER_INFO,
    user
  }
};

export const saveUser = (user) => {
  return {
    type: types.SAVE_USER,
    user
  }
};

export const clearUser = () => {
  return {
    type: types.CLEAR_USER
  }
}