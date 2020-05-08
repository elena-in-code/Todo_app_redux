import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../../store/actions';

import Todo from '../todo/todo';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        const { id, text, completed } = todo;
        return (
          <Todo
            key={id}
            content={text}
            completed={completed}
            onTodoDelete={() => deleteTodo(id)}
            onTodoToggle={() => toggleTodo(id)}
          />
        );
      })}
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
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
