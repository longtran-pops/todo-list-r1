import { memo } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles } from '@material-ui/core';

const icons = {
  todo: 'assignment',
  'in-progress': 'autorenew',
  done: 'assignment_turned_in',
  deleted: 'delete',
  canceled: 'cancel',
};

const colors = {
  todo: 'primary',
  'in-progress': 'info',
  done: 'success',
  deleted: 'error',
  canceled: 'warning',
};

const useStyle = makeStyles(({ palette }) =>
  createStyles({
    icon: {
      color: ({ status }) => palette[colors[status]]?.main,
    },
  })
);

const renderButtonByStatus = (status, changeStatusFn) => {
  switch (status) {
    case 'todo':
      return (
        <>
          <Button
            size="small"
            color="primary"
            onClick={changeStatusFn('in-progress')}
          >
            Start
          </Button>
          <Button size="small" onClick={changeStatusFn('deleted')}>
            Delete
          </Button>
        </>
      );
    case 'in-progress':
      return (
        <>
          <Button size="small" color="primary" onClick={changeStatusFn('done')}>
            Done
          </Button>
          <Button size="small" onClick={changeStatusFn('canceled')}>
            Cancel
          </Button>
        </>
      );
    case ('done', 'canceled'):
      return (
        <Button size="small" color="error" onClick={changeStatusFn('deleted')}>
          Delete
        </Button>
      );
    default:
      return null;
  }
};

const TaskListItem = ({ children, status, onChangeStatus }) => {
  const changeStatus = (nextStatus) => () => onChangeStatus(nextStatus);
  const classes = useStyle({ status });

  return (
    <Grid item xs={12}>
      <Paper>
        <Box display="flex" alignItems="center" px={2} py={1}>
          <Grid container item xs={8} justify="flex-start" alignItems="center">
            <Icon className={classes.icon}>{icons[status]}</Icon>
            <Box ml={1}>
              <Typography variant="subtitle1">{children}</Typography>
            </Box>
          </Grid>
          <Grid container item xs={4} justify="flex-end" alignItems="center">
            {renderButtonByStatus(status, changeStatus)}
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

TaskListItem.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string,
  onChangeStatus: PropTypes.func,
};

export default memo(TaskListItem);
