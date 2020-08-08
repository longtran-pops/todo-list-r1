import Head from 'next/head'
import {useEffect, useState} from 'react'
import TaskList from 'components/TaskList'
import TaskListItem from 'components/TaskListItem'
import TaskInput from 'components/TaskInput'

export const saveList = (list) => localStorage ? localStorage.setItem('task_list', JSON.stringify(list)) : null;

export const getList = () => {
  try {
    const state = window.localStorage.getItem('task_list');
    return state ? JSON.parse(state) : null;
  } catch {}
};


export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getList());
  }, []);


  const onAddTask = (task) => {
    setTasks([...tasks, task]);
    saveList(tasks);
  }
  const updateTask = (changeItem) => (status) => {
    tasks.forEach((item) => {
      if (item.id === changeItem.id) {
        item.status = status;
      }
    })
    setTasks([...tasks]);
    saveList(tasks);
  };
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
        <TaskInput onAdd={(task) => onAddTask(task)} />
        <TaskList>
          {tasks.map((task) => {
            return (
              <TaskListItem key={task.id} status={task.status}
                            onUpdateStatus={updateTask(task)}>
                {task.title}
              </TaskListItem>
            )
          })}
        </TaskList>
      </main>
    </div>
  )
}
