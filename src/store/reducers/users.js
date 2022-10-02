import * as actionTypes from '../actions/actionTypes';
import { DEFAULT_PROFILE_STATE } from '../../utils/constants';

const getUsers = (state, action) => {
  return {
    ...state,
    ...DEFAULT_PROFILE_STATE,
    list: action.payload,
  };
};

const getUser = (state, action) => {
  const { user, photos, posts, todos } = action.payload;
  return {
    ...state,
    user, photos, posts, todos
  };
};

const removeUserData = (state, action) => {
  const { name, id } = action.payload;

  return {
    ...state,
    [name]: state[name].filter(el => el.id !== id),
  };
};

const addUserData = (state, action) => {
  const { name, data } = action.payload;

  return {
    ...state,
    [name]: [...state[name], data],
  };
};

const updateUserData = (state, action) => {
  const { name, id, data } = action.payload;
  const itemCopy = state[name].map((item) => {
    if (item.id === id) {
      return {...item, ...data}
    }
    return item;
  });

  return {
    ...state,
    [name]: itemCopy
  }
};

const reducer = (state = DEFAULT_PROFILE_STATE, action) => {
  switch (action.type) {
    case actionTypes.USERS_GET_SUCCEED: return getUsers(state, action);
    case actionTypes.USER_GET_SUCCEED: return getUser(state, action);
    case actionTypes.USER_REMOVE_DATA_SUCCEED: return removeUserData(state, action);
    case actionTypes.USER_ADD_DATA_SUCCEED: return addUserData(state, action);
    case actionTypes.USER_UPDATE_DATA_SUCCEED: return updateUserData(state, action);
    default: return state;
  }
};

export default reducer;