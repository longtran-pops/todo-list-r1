import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveState, getState } from 'utils/persistStore';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}) {
  const storedState = getState() || initialState;
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const middlewareEnhancers = applyMiddleware(...middlewares);

  const withDevtoolComposed = composeWithDevTools(middlewareEnhancers);

  const store = createStore(rootReducers, storedState, withDevtoolComposed);

  sagaMiddleware.sagaTasks = sagaMiddleware.run(rootSaga);

  store.subscribe(() => {
    saveState(store);
  });

  return store;
}
