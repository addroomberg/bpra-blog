import { put, delay } from 'redux-saga/effects'

import * as actions from "../actions/index";
import { signUpUser } from '../../api/blogApi';


export function* signOutSaga(action) {
  const { history } = action.payload;

  yield put(actions.startProgress());
  yield delay(1000); // simulate sign-out process
  yield localStorage.removeItem('token');

  yield put(actions.signOutSucceed());
  yield put(actions.stopProgress());
  yield history.push('/signin');
}

export function* signInSaga(action) {
  const { username, password, history } = action.payload;
  
  yield put(actions.startProgress());
  yield delay(1000, username, password); // simulate sign-in process

  const token = new Date().getTime();
  yield localStorage.setItem('token', token);

  yield put(actions.signInSucceed({ token }));
  yield put(actions.stopProgress());
  yield history.push('/profile');
}

export function* signUpSaga(action) {
  const { payload } = action;
  const history = payload.history;
  delete payload.history;

  yield put(actions.startProgress());
  yield signUpUser(payload);

  yield put(actions.signUpSucceed());
  yield put(actions.stopProgress());
  yield history.push('/signin');
}