import lscache from 'lscache';
// eslint-disable-next-line import/no-cycle
import {
  SET_TASKS,
  START_TASK,
  DONE_TASK,
  CANCEL_TASK,
  DELETE_TASK,
  RESET,
} from '~/utils/storeapi';

const setState = (currentState) => {
  lscache.set('state', JSON.stringify(currentState));
  return currentState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'sync':
      return setState(action.newState);
    case SET_TASKS:
      return setState({
        ...state,
        tasks: [...action.payload],
      });
    case START_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                status: 'in-progress',
              }
            : task,
        ),
      };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                status: 'done',
              }
            : task,
        ),
      };
    case CANCEL_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                status: 'canceled',
              }
            : task,
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                status: 'deleted',
              }
            : task,
        ),
      };
    case RESET:
      return setState({
        ...state,
        tasks: [],
      });
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;
