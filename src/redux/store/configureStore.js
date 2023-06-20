import {applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import todoReducer from '../reducers/todoReducer';

const configureStore = () => {
  return createStore(todoReducer);
};

export default configureStore;
