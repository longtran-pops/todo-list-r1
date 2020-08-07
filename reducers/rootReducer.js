import { combineReducers } from 'redux';
import { todoReducer } from './todo-list/reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
