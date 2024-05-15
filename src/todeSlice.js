import { createSlice } from "@reduxjs/toolkit";

function dataFormLocalStorage() {
  return (
    JSON.parse(localStorage.getItem("todos")) || {
      todos: [],
    }
  );
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: dataFormLocalStorage(),
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
      todoSlice.caseReducers.setLocal(state);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((item) => item.id !== payload);
      todoSlice.caseReducers.setLocal(state);
    },
    changeStateTodo: (state, { payload }) => {
      const item = state.todos.find((item) => item.id == payload);
      item.completed = !item.completed;
      todoSlice.caseReducers.setLocal(state);
    },
    setLocal: (state) => {
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, removeTodo, changeStateTodo } = todoSlice.actions;
export default todoSlice.reducer;
