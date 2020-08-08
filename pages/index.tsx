import Head from 'next/head';
import { useSelector } from 'react-redux';
import TaskList from 'components/TaskList';
import TaskListItem from 'components/TaskListItem';
import TaskInput from 'components/TaskInput';
import Task from 'models/Task';

export default function Home() {
  const { tasks } = useSelector(state => state.tasks);

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
        <TaskInput />
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
