import React from 'react';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { useGlobalStore } from '../utils/storeapi';

const icons = {
  todo: 'assignment',
  'in-progress': 'autorenew',
  done: 'assignment_turned_in',
  deleted: 'delete',
  canceled: 'cancel',
};
const colors = {
  todo: 'grey',
  'in-progress': 'blue',
  done: 'green',
  deleted: 'red',
  canceled: 'black',
};
const actionMap = {
  todo: ['start', 'delete'],
  'in-progress': ['cancel', 'done'],
  done: ['delete'],
  canceled: ['delete'],
  deleted: [],
};

export default ({ id, children, status }) => {
  const { setTaskStart, setTaskDone, setTaskCancel, setTaskDelete } = useGlobalStore();
  const actions = actionMap[status];
  return (
    <>
      <li className="task-list__item">
        <Icon style={{ color: colors[status], margin: 'auto 4px auto 0px' }}>{icons[status]}</Icon>
        <p className="title">{children}</p>
        <div className="btn-group">
          {actions.includes('start') ? (
            <Button onClick={() => setTaskStart(id)} type="button" color="primary">
              Start
            </Button>
          ) : null}
          {actions.includes('done') ? (
            <Button onClick={() => setTaskDone(id)} type="button" color="secondary">
              Done
            </Button>
          ) : null}
          {actions.includes('cancel') ? (
            <Button onClick={() => setTaskCancel(id)} type="button">
              Cancel
            </Button>
          ) : null}
          {actions.includes('delete') ? (
            <Button onClick={() => setTaskDelete(id)} type="button">
              Delete
            </Button>
          ) : null}
        </div>
      </li>
      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
};
