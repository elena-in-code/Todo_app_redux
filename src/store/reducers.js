const initialState = {
  todos: [],
};

const reducerTodos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: false,
        }),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            const toggleTodo = {
              ...todo,
              completed: !todo.completed,
            };
            return toggleTodo;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default reducerTodos;
