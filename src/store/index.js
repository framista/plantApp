import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = compose(middlewareEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
};

export default configureStore;
