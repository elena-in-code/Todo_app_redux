import React from 'react';
import './todo.css';

const Todo = ({ content, onClick, onTodoDelete }) => (
  <div className="todo__wrapper" onClick={onClick}>
    {content}
    <button className="todo__button-delete" onClick={onTodoDelete}>
      X
    </button>
  </div>
);

export default Todo;
