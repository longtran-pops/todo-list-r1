import produce from 'immer';
import {
  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
} from './constants';

export const initialState = {
  todoList: [],
  processingTask: {},
  loading: false,
  error: [],
};

/* eslint-disable default-case, no-param-reassign */
export const todoReducer = produce((draft, action) => {
  switch (action.type) {
    case (GET_TODO, ADD_TASK):
      draft.loading = true;
      break;
    case GET_TODO_SUCCESS:
      draft.todoList = action.payload;
      break;
    case ADD_TASK_SUCCESS:
      draft.todoList.push(action.payload);
      break;
    case UPDATE_TASK:
      draft.processingTask[action.id] = true;
      break;
    case UPDATE_TASK_SUCCESS: {
      const {
        payload: { id, status },
      } = action;
      const index = draft.todoList.findIndex((item) => item.id === id);
      draft.processingTask[action.id] = false;
      draft.todoList[index].status = status;
      break;
    }
    case (GET_TODO_FAIL, UPDATE_TASK_FAIL, ADD_TASK_FAIL):
      draft.error = action.error;
      break;
  }
}, initialState);
