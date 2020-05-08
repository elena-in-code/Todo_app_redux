import React from 'react';
import './todo.css';

const Todo = ({ content, onClick }) => (
  <div className="todo__wrapper" onClick={onClick}>
    {content}
  </div>
);

export default Todo;
