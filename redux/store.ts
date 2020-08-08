import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";

const middlewares = [thunk];
const makeConfiguredStore = (reducer) => createStore(reducer, undefined, composeWithDevTools(applyMiddleware(...middlewares)));

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    const persistConfig = {
      key: "nextjs",
      whitelist: ["tasks"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store: any = makeConfiguredStore(persistedReducer);

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
