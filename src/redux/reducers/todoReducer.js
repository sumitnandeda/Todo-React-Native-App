import {ADD_TODO, TOGGLE_TODO} from '../actions/todoAction';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        complete: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
