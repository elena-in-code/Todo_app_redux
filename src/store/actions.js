import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};
