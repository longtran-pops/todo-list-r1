// eslint-disable-next-line import/no-cycle
import { useStore } from './store';

export const SET_TASKS = 'SET_TASKS';
export const START_TASK = 'START_TASK';
export const DONE_TASK = 'DONE_TASK';
export const CANCEL_TASK = 'CANCEL_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RESET = 'RESET';

export const useGlobalStore = () => {
  const { state, dispatch } = useStore();
  return {
    ...state,
    setTasks: (tasks) => dispatch({ type: SET_TASKS, payload: tasks }),
    setTaskStart: (id) => dispatch({ type: START_TASK, payload: { id } }),
    setTaskDone: (id) => dispatch({ type: DONE_TASK, payload: { id } }),
    setTaskCancel: (id) => dispatch({ type: CANCEL_TASK, payload: { id } }),
    setTaskDelete: (id) => dispatch({ type: DELETE_TASK, payload: { id } }),
    resetTasks: () => dispatch({ type: RESET }),
  };
};
