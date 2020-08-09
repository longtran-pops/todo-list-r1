import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import TaskList from 'components/TaskList'
import TaskListItem from 'components/TaskListItem'
import TaskInput from 'components/TaskInput'
import { persistTodos, readLocalTodos } from '../todo-helper'

export default function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    setTasks(readLocalTodos())
  },[])
  const updateTask = useCallback((taskID,status)=>{
    setTasks(prevState => {
      const updatingItem =  prevState.find(item => item.id === taskID);
      if(updatingItem) updatingItem.status = status;
      // queue later in the event loop - prevent render process from blocking
      setTimeout(() => {
        persistTodos(prevState)
      }, 100);
      return [...prevState]
    })
    
  },[])
  const addTask = useCallback((task)=>{
    setTasks(prevState => {
      const nextState = [...prevState,task]
      // queue later in the event loop - prevent render process from blocking
      setTimeout(() => {
        persistTodos(nextState)
      }, 100);
      return nextState
    })
  },[])
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
        <TaskInput onAdd={addTask} />
        <TaskList>
          {tasks.map((task) => {
            return (
              <TaskListItem key={task.id} id={task.id} onUpdate={updateTask} status={task.status}>
                {task.title}
              </TaskListItem>
            )
          })}
        </TaskList>
      </main>
    </div>
  )
}
