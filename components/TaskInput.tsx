import { useState } from 'react';
import Task from 'models/Task';

interface TaskInputProps {
  onAdd: Function;
}

export default (props: TaskInputProps) => {
  const { onAdd } = props;
  const [taskTitle, updateTaskTitle] = useState('');
  
  const addTask = () => {
    if (onAdd && taskTitle) {
      onAdd(new Task(taskTitle));
    }
    
    updateTaskTitle('');
  };

  return (
    <>
      <form className="container" onSubmit={(e) => {
        e.preventDefault();
        addTask();
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