import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Task from 'models/Task';
import { addTask } from 'redux/actions/taskAction';

export default () => {
  const [taskTitle, updateTaskTitle] = useState('');
  const dispatch = useDispatch();
  
  const addNewTask = () => {
    if (taskTitle) {
      dispatch(addTask(new Task(taskTitle)))
    }
    
    updateTaskTitle('');
  };

  return (
    <>
      <form className="container" onSubmit={(e) => {
        e.preventDefault();
        addNewTask();
      }} >
        <input className="task-input" type="text" value={taskTitle} onChange={(e) => updateTaskTitle(e.currentTarget.value)} />
      </form>

      <style jsx>{`
      .container {
        display: flex;
        margin: 16px 0px;
      }
      .task-input {
        appearance: none;
        padding: 8px 4px;
        display: block;
        flex: 1;
        border: 1px solid #dedede;
        border-radius: 2px;
      }
      `}</style>
    </>
  );
}