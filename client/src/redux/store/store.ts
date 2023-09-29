import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../todo/todo.slice";
import todoInputOrChangeSliceReducer from "../todo/todo.inputorchange.slice"

export const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
    todoInputOrChange: todoInputOrChangeSliceReducer,
  },
});

