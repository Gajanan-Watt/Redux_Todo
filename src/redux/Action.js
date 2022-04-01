import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./ActionType";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: payload
});

export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload: payload
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload: payload
});
