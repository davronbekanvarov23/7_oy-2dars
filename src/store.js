import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todeSlice";

export const store = configureStore({
  reducer: {
    todosState: todoReducer,
  },
});
