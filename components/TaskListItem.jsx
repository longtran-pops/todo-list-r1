import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'

import React from "react";

const icons = {
  'todo': 'assignment',
  'in-progress': 'autorenew',
  'done': 'assignment_turned_in',
  'deleted': 'delete',
  'canceled': 'cancel'
}
const colors = {
  'todo': 'grey',
  'in-progress': 'blue',
  'done': 'green',
  'deleted': 'red',
  'canceled': 'black'
}

const renderButtonByStatus = (status, toUpdateStatus) => {
  switch (status) {
    case 'todo':
      return (
          <>
            <Button type="button" color="primary" onClick={toUpdateStatus('in-progress')}>Start</Button>
            <Button type="button" color="secondary" onClick={toUpdateStatus('deleted')}>Delete</Button>
          </>
      );
    case 'in-progress':
      return (
          <>
            <Button type="button" color="secondary" onClick={toUpdateStatus('done')}>
              Done
            </Button>
            <Button type="button" onClick={toUpdateStatus('canceled')}>
              Cancel
            </Button>
          </>
      );
    case 'done':
    case 'canceled':
      return (
        <Button type="button" onClick={toUpdateStatus('deleted')}>Delete</Button>
      );
    default:
      break;
  }
};

const TaskListItem = ({ children, status, onUpdateStatus }) => {
  const changeStatus = (newStatus) => () => onUpdateStatus(newStatus);

  return (
    <>
      <li className="task-list__item">
        <Icon style={{ color: colors[status], margin: 'auto 4px auto 0px' }}>{icons[status]}</Icon>
        <p className="title">{children}</p>
        <div className="btn-group">
          {renderButtonByStatus(status, changeStatus)}
        </div>
      </li>
      <style jsx>{
        `
        .task-list__item {
          padding: 4px 8px;
          margin: 2px 0px;
          display: flex;
          background: #fff;
        }
        .title {
          flex: 1;
          margin: auto 0;
        }
        .btn-group {
          display: flex;
        }
        `
      }</style>
    </>
  )
}

export default TaskListItem;