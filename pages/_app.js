import React from 'react';
import { StoreProvider } from '~/utils/store';

function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default App;
