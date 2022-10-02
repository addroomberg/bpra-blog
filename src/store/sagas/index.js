import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes'
import { signInSaga } from './auth';

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_SIGN_IN_INITIATE, signInSaga);
}
