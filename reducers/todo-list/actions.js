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

export const getTodo = () => ({
  type: GET_TODO,
});

export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});

export const getTodoFail = (error) => ({
  type: GET_TODO_FAIL,
  error,
});

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const addTaskSuccess = (payload) => ({
  type: ADD_TASK_SUCCESS,
  payload,
});

export const addTaskFail = (error) => ({
  type: ADD_TASK_FAIL,
  error,
});

export const updateTask = (payload) => ({
  type: UPDATE_TASK,
  payload,
});

export const updateTaskSuccess = (payload) => ({
  type: UPDATE_TASK_SUCCESS,
  payload,
});

export const updateTaskFail = (error) => ({
  type: UPDATE_TASK_FAIL,
  error,
});
