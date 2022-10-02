import * as actionTypes from "./actionTypes";

export const signOut = (payload) => {
  return {
    type: actionTypes.AUTH_SIGN_OUT_INITIATE,
    payload,
  };
}

export const signOutSucceed = () => {
  return {
    type: actionTypes.AUTH_SIGN_OUT_SUCCEED,
  };
};

export const signIn = (payload) => {
  return {
    payload,
    type: actionTypes.AUTH_SIGN_IN_INITIATE,
  };
}

export const signInSucceed = (payload) => {
  return {
    payload,
    type: actionTypes.AUTH_SIGN_IN_SUCCEED,
  };
};

export const signUp = (payload) => {
  return {
    payload,
    type: actionTypes.AUTH_SIGN_UP_INITIATE,
  };
}

export const signUpSucceed = () => {
  return {
    type: actionTypes.AUTH_SIGN_UP_SUCCEED,
  };
};
