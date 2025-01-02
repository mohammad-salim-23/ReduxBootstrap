import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featurs/counter/counterSlice"
export const store = configureStore({
    reducer:{
       counter: counterReducer
    },
});
