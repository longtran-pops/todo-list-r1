import { createMuiTheme } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    green: {
      main: green[500],
    },
    info: {
      main: lightBlue[500],
    },
  },
});

export default theme;
