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
        checking: false,
        ...payload,
      };
    default:
      return state;
  }
};
