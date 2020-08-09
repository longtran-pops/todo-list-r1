import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './styles/TaskItem.style';
import Button from './styles/Button.style';
import StateListButton from './styles/StateListButton.style';

const Task = ({ task, onDelete, onUpdateStatus }) => {
  const { id, title, status } = task;

  return (
    <TaskItem>
      <p>{title}</p>
      <StateListButton>
        {status === 'TODO' && (
          <>
            <Button
              title="Start"
              onClick={() => onUpdateStatus(id, 'IN_PROCESS')}
            >
              Start
            </Button>
            <Button
              title="Delete"
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </Button>
          </>
        )}
        {status === 'IN_PROCESS' && (
          <>
            <Button title="Done" onClick={() => onUpdateStatus(id, 'DELETED')}>
              Done
            </Button>
            <Button
              title="Cancel"
              onClick={() => onUpdateStatus(id, 'DELETED')}
            >
              Cancel
            </Button>
          </>
        )}
        {status === 'DELETED' && (
          <Button
            title="Delete"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </Button>
        )}
      </StateListButton>
    </TaskItem>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Task;
