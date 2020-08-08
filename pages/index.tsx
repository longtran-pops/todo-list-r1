import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from 'components/TaskList';
import TaskListItem from 'components/TaskListItem';
import TaskInput from 'components/TaskInput';
import Task from 'models/Task';
import { addTask } from 'redux/actions/taskAction';

export default function Home() {
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);
  const onAdd = (task: Task) => dispatch(addTask(task));

  return (
    <div className='container'>
      <Head>
        <title>Todo Task Web App</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400,500|Material+Icons'
          rel='stylesheet'
        />
      </Head>
      <main style={{ maxWidth: '966px', margin: 'auto' }}>
        <TaskInput onAdd={(task: Task) => onAdd(task)} />
        <TaskList>
          {tasks.map((task: Task) => {
            return (
              <TaskListItem key={task.id} task={task} />
            )
          })}
        </TaskList>
      </main>
    </div>
  );
}
