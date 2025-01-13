import { RootState } from "@/redux/store";
import { Itask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState{
    tasks:Itask[],
    filter:"all"|"high"|"medium"|"low";
}
const initialState:InitialState = {
    tasks:[
        {
            id:"abcse",
            title:"initial Frontend",
            description:"Create Home page, and routing",
            dueDate:"2025-11",
            isCompleted:false,
            priority:"High"
        },
        {
            id:"wxyz",
            title:"initial Backend",
            description:"Create Home page, and routing",
            dueDate:"2025-11",
            isCompleted:false,
            priority:"Medium"
        },
    ],
    filter:"all"
};
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
         addTask:(state,action)=>{
            state.tasks.push (action.payload);
            //State: Represents the current state of the slice (state.tasks in this case
            //action.payload: The data you pass when dispatching the action
            
         }
    },
});

export const selectTasks = (state:RootState)=>{
    return state.todo.tasks
}
export const selectFilter = (state:RootState)=>{
    return state.todo.filter
}
export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;
