import { gql, useQuery, useMutation } from '@apollo/client';
import Task from './Task.Component';
import {
  TASKS_QUERY,
  DELETE_TASK,
  UPDATESTATUS_TASK,
} from '../lib/graphql/tasks.graphql';

import Input from './styles/Input.style';
import TaskList from './styles/TaskList.style';

import Error from './ErrorMessage.Component';

// const possibleStatus = ['TODO', 'IN_PROCESS', 'CANCELLED', 'DONE', 'DELETED'];

const CREATE_TASK = gql`
  mutation CreateTask($title: String!, $status: String!) {
    createTask(title: $title, status: $status) {
      id
      title
      status
    }
  }
`;

const TasksContainer = () => {
  const { loading, data, error } = useQuery(TASKS_QUERY);
  const [createTask] = useMutation(CREATE_TASK);
  const [updateStatusTask] = useMutation(UPDATESTATUS_TASK);
  const [deleteTask] = useMutation(DELETE_TASK);

  if (loading) return <div>Loading...</div>;
  if (error) return <Error error={error} />;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const title = e.target.value;
      e.target.value = '';
      createTask({
        variables: { title, status: 'TODO' },
        update: (cache, { data: { createTask } }) => {
          const { tasks } = cache.readQuery({ query: TASKS_QUERY });
          cache.writeQuery({
            query: TASKS_QUERY,
            data: { tasks: tasks.concat([createTask]) },
          });
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createTask: {
            id: '-1',
            title,
            status: 'TODO',
            __typename: 'Task',
          },
        },
      });
    }
  };

  const handleUpdateStatus = (id, status) => {
    updateStatusTask({
      variables: { id, status },
      optimisticResponse: {
        __typename: 'Mutation',
        updateStatusTask: {
          id,
          __typename: 'Task',
          status,
        },
      },
    });
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this task?')) {
      deleteTask({
        variables: { id },
        update: (cache) => {
          const { tasks = [] } = cache.readQuery({ query: TASKS_QUERY });
          cache.writeQuery({
            query: TASKS_QUERY,
            data: { tasks: tasks.filter((task) => task.id !== id) },
          });
        },
      });
    }
  };

  return (
    <div>
      <Input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="What are your missing task???"
        autoFocus={true}
      />
      <TaskList>
        {data?.tasks?.length === 0 ? (
          <>
            <p>Well done! You remember anything!</p>
            <p>
              ...Or let me help you by entering task which you want to keep
              track
            </p>
          </>
        ) : (
          data.tasks.map((task) => (
            <li key={task.id}>
              <Task
                task={task}
                onUpdateStatus={handleUpdateStatus}
                onDelete={handleDelete}
              />
            </li>
          ))
        )}
      </TaskList>
    </div>
  );
};

export default TasksContainer;
