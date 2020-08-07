import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core';
import theme from 'components/theme';
import configureStore from '../reducers/configureStore';

const store = configureStore();

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pageProps: PropTypes.object,
};

export default App;
