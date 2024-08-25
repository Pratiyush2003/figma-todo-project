import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./features/getUserSlice";

export const store = configureStore({
  reducer: {
    app: todoSlice
  },
});
