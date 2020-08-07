import PropTypes from 'prop-types';
import Head from 'next/head';
import { useEffect } from 'react';
import TaskList from 'components/TaskList';
import TaskListItem from 'components/TaskListItem';
import TaskInput from 'components/TaskInput';
import { createStructuredSelector } from 'reselect';
import * as todoSelectors from 'reducers/todo-list/selectors';
import * as todoActions from 'reducers/todo-list/actions';
import { connect } from 'react-redux';

export const Todo = ({ getTodo, addTask, updateTask, todoList }) => {
  useEffect(() => {
    getTodo();
  }, []);

  const handleTaskStatusChange = (id) => (status) => updateTask({ id, status });

  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div className="container">
        <main style={{ maxWidth: '966px', margin: 'auto' }}>
          <TaskInput onAdd={(task) => addTask(task)} />
          <TaskList>
            {todoList &&
              todoList.map((task) => (
                <TaskListItem
                  key={task.id}
                  status={task.status}
                  onChangeStatus={handleTaskStatusChange(task.id)}
                >
                  {task.title}
                </TaskListItem>
              ))}
          </TaskList>
        </main>
      </div>
    </>
  );
};

Todo.propTypes = {
  getTodo: PropTypes.func,
  todoList: PropTypes.array,
  addTask: PropTypes.func,
  updateTask: PropTypes.func,
};

const mapState = createStructuredSelector({
  todoList: todoSelectors.selectTodoList,
});

const mapDispatch = {
  getTodo: todoActions.getTodo,
  addTask: todoActions.addTask,
  updateTask: todoActions.updateTask,
};

const withConnect = connect(mapState, mapDispatch);

export default withConnect(Todo);
