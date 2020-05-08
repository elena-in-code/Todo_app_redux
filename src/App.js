import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TodoList from './components/list/todoList/todoList';
import Form from './components/form/form';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1 className="app__title">Todo List</h1>
      <Form />
      <TodoList />
    </div>
  </Provider>
);

export default App;
