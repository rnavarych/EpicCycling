import * as types from "../constants/actionTypes";

export const savePhoneNumber = (code, phone) => {
  return {
    type: types.SAVE_PHONE_NUMBER,
    code,
    phone
  }
};

export const saveUser = (user) => {

}