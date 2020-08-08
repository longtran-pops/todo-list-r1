import React from 'react';
import Head from 'next/head';

import TaskList from '~/components/TaskList';
import TaskListItem from '~/components/TaskListItem';
import TaskInput from '~/components/TaskInput';
import { useGlobalStore } from '~/utils/storeapi';

export default function Home() {
  const { tasks, setTasks } = useGlobalStore();
  return (
    <div className="container">
      <Head>
        <title>Todo Task Web App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400,500|Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <main style={{ maxWidth: '966px', margin: 'auto' }}>
        <TaskInput onAdd={(task) => setTasks([...tasks, task])} />
        <TaskList>
          {tasks.map((task) => (
            <TaskListItem key={task.id} id={task.id} status={task.status}>
              {task.title}
            </TaskListItem>
          ))}
        </TaskList>
      </main>
    </div>
  );
}
