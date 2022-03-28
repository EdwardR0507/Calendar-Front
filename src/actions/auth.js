import Swal from "sweetalert2";
import { fetchUnauthorized } from "../helpers/fetch";
import { types } from "../types/types";

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const res = await fetchUnauthorized(
      "auth/new",
      { name, email, password },
      "POST"
    );
    const response = await res.json();
    if (response.ok) {
      const { uid, name, token } = response;
      localStorage.setItem("token", token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        loginAction({
          uid,
          name,
        })
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.message,
      });
    }
  };
};

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchUnauthorized("auth", { email, password }, "POST");
    const response = await res.json();
    if (response.ok) {
      const { uid, name, token } = response;
      localStorage.setItem("token", token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        loginAction({
          uid,
          name,
        })
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.message,
      });
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const res = await fetchUnauthorized("auth/renew");
    const response = await res.json();
    if (response.ok) {
      const { uid, name, token } = response;
      localStorage.setItem("token", token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        loginAction({
          uid,
          name,
        })
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.message,
      });
      dispatch(checkingFinishAction());
    }
  };
};

export const loginAction = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const checkingFinishAction = () => ({
  type: types.authChecked,
});
