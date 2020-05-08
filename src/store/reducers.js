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
        }),
      };
    default:
      return state;
  }
};

export default reducerTodos;
