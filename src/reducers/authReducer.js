import { types } from "../types/types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.authLogin:
      return {
        ...state,
        ...payload,
        checking: false,
      };
    case types.authChecked:
      return {
        ...state,
        checking: false,
      };
    default:
      return state;
  }
};
