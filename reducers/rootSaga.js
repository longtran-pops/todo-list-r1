import { all } from 'redux-saga/effects';
import todoSaga from './todo-list/saga';

export default function* rootSaga() {
  return yield all([todoSaga()]);
}
