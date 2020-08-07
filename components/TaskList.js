import { memo } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

export const TaskList = ({ children }) => (
  <Grid container justify="center" alignItems="center" spacing={2}>
    {children}
  </Grid>
);

TaskList.propTypes = {
  children: PropTypes.node,
};

export default memo(TaskList);
