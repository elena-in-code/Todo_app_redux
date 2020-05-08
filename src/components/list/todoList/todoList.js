import React from 'react';
import { connect } from 'react-redux';

import Todo from '../todo/todo';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} content={todo.text} onclick={() => {}} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { todos } = state.reducerTodos;
  return {
    todos,
  };
};

export default connect(mapStateToProps)(TodoList);
