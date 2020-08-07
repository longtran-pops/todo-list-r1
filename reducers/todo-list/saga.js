import { takeLatest, put } from 'redux-saga/effects';
import { GET_TODO, ADD_TASK, UPDATE_TASK } from './constants';
import { addTaskSuccess, updateTaskSuccess } from './actions';

export function* getTodo() {
  // Real API call will be implemented here
}

export function* addTask({ payload }) {
  // Add task successfully before update UI
  yield put(addTaskSuccess(payload));
}

export function* updateTaskInfo({ payload }) {
  // Update task status successfully to server before update UI
  yield put(updateTaskSuccess(payload));
}

export default function* todoSaga() {
  yield takeLatest(GET_TODO, getTodo);
  yield takeLatest(ADD_TASK, addTask);
  yield takeLatest(UPDATE_TASK, updateTaskInfo);
}
