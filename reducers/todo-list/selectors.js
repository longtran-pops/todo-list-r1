import { createSelector } from 'reselect';

const getTodoState = (state) => state.todo;

export const selectTodoList = createSelector(
  getTodoState,
  (todo) => todo.todoList
);
