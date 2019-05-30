// @redux store
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// @middleware
const middleware = [thunk];
const initialState = {};

const Store = createStore(
  rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
