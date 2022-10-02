import * as actionTypes from '../actions/actionTypes';

const initialState = {
    active: false,
};

const startProgress = () => {
  return {
    active: true,
  };
};

const stopProgress = () => {
  return {
    active: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROGRESS_START: return startProgress(state, action);
    case actionTypes.PROGRESS_STOP: return stopProgress(state, action);
    default: return state;
  }
};

export default reducer;