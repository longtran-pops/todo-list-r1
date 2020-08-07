import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';

export const TaskInput = ({ onAdd }) => {
  const [taskTitle, updateTaskTitle] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (taskTitle) {
      onAdd({
        id: Date.now(),
        title: taskTitle,
        status: 'todo',
      });
    }
    updateTaskTitle('');
  };

  const setInputValue = ({ currentTarget: { value } }) =>
    updateTaskTitle(value);

  return (
    <Box mb={2}>
      <form onSubmit={addTask}>
        <FormControl fullWidth>
          <TextField
            label="Task Name"
            variant="outlined"
            value={taskTitle}
            onChange={setInputValue}
          />
        </FormControl>
      </form>
    </Box>
  );
};

TaskInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default memo(TaskInput);
