import React from 'react';
import './todo.css';

const Todo = ({ content, completed, onTodoDelete, onTodoToggle }) => (
  <div className="todo__wrapper" onClick={onTodoToggle}>
    <span
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {content}
    </span>
    <button className="todo__button-delete" onClick={onTodoDelete}>
      X
    </button>
  </div>
);

export default Todo;
