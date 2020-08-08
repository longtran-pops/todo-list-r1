import App from "next/app";
import React from "react";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../redux/store";

export default wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
});
