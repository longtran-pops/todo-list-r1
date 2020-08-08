import * as ActionTypes from '../../constants/types';
import Task from '../../models/Task';
import { updateObject } from 'helpers/utils';

interface TaskReducerState {
  tasks: Task[];
}

const initialState: TaskReducerState = {
  tasks: []
};

const addTask = (state: TaskReducerState, action: any): TaskReducerState => {
  const tasksUpdated = [...state.tasks, action.payload];
  return updateObject(state, {tasks: tasksUpdated});
};

const removeTask = (state: TaskReducerState, action: any): TaskReducerState => {
  let tasksUpdated = [...state.tasks];
  tasksUpdated = tasksUpdated.filter((task: Task) => task.id != action.payload.id);
  return updateObject(state, {tasks: tasksUpdated});
};

const updateTask = (state: TaskReducerState, action: any): TaskReducerState => {
  const tasksUpdated = [...state.tasks];
  const taskUpdatedIndex = tasksUpdated.findIndex((task: Task) => task.id === action.payload.task.id);
  tasksUpdated[taskUpdatedIndex].status = action.payload.status;
  return updateObject(state, {tasks: tasksUpdated});
};

const taskReducer = (state: TaskReducerState = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:  return addTask(state, action);
    case ActionTypes.REMOVE_TASK:  return removeTask(state, action);
    case ActionTypes.UPDATE_TASK:  return updateTask(state, action);
    default:  return state;
  }
}

export default taskReducer;