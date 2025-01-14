import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featurs/counter/counterSlice"
import taskReducer from './featurs/task/taskSlice';
import userReducer from "./featurs/user/userSlice"
export const store = configureStore({
    reducer:{
       counter: counterReducer,
       todo:taskReducer,
       user:userReducer
    },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
