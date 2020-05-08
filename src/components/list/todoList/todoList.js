import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../../store/actions';

import Todo from '../todo/todo';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          content={todo.text}
          onclick={() => {}}
          onTodoDelete={() => deleteTodo(todo.id)}
        />
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

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch(deleteTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
