import React from 'react';

const Todo = ({ content, onClick }) => <div onClick={onClick}>{content}</div>;

export default Todo;
