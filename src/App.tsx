import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  );
};

export default App;
