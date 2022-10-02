import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: localStorage.token || null,
};

const authSignOut = (state, action) => {
  return {
    ...state,
    token: null
  };
};

const authSignIn = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    token: payload.token
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SIGN_OUT_SUCCEED: return authSignOut(state, action);
    case actionTypes.AUTH_SIGN_IN_SUCCEED: return authSignIn(state, action);
    default: return state;
  }
};

export default reducer;