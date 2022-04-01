import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./ActionType";

let initState = { todo: [] };
export const reducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, payload]
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === payload ? { ...el, status: !el.status } : el
        )
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== payload)
      };
    }
    default: {
      return state;
    }
  }
};
