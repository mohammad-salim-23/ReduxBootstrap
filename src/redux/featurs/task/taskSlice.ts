import { RootState } from "@/redux/store";
import { Itask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";
interface InitialState{
    tasks:Itask[],
    filter:"all"|"high"|"medium"|"low";
}
const initialState:InitialState = {
    tasks:[
        {
            id:"abcdef",
            isCompleted:false,
            title:"sokaleBanaici",
            description:"ca kaite mon caar",
            priority:"medium",
            dueDate:"2025-01-14T",
            assignedTo: null,
            
        }
    ],
    filter:"all"
    
};

type DraftTask = Pick<Itask, "title" | "description" | "dueDate" | "priority"| "assignedTo">;
const createTask = (taskData: DraftTask):Itask=>{
    return {id: nanoid(), isCompleted: false, ...taskData, assignedTo: taskData.assignedTo ? taskData.assignedTo : null};
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
         addTask:(state,action: PayloadAction<DraftTask>)=>{
            
         const taskData = createTask(action.payload);
            state.tasks.push (taskData);
            //State: Represents the current state of the slice (state.tasks in this case
            //action.payload: The data you pass when dispatching the action
         },
         toggleCompleteState:(state, action:PayloadAction<string>)=>{
            state.tasks.forEach((task)=>{
                if (task.id === action.payload) {
                    task.isCompleted = !task.isCompleted;
                }
            });
         },
         deleteTask:(state, action:PayloadAction<string>)=>{
            state.tasks = state.tasks.filter((task)=>task.id !== action.payload)
         },
         updateFilter: (state, action:PayloadAction<"all"|"low" | "medium" | "high">)=>{
            state.filter = action.payload;
         },

    },
    extraReducers:(builder)=>{
        builder.addCase(removeUser, (state,action)=>{
            state.tasks.forEach((task)=>
                task.assignedTo === action.payload? (task.assignedTo = null):task
            )
        })
    }
});

export const selectTasks = (state:RootState)=>{
    const filter = state.todo.filter;
    if(filter === "low"){
        return state.todo.tasks.filter((task)=>task.priority === "low");
    }else if(filter === "medium"){
        return state.todo.tasks.filter((task)=>task.priority === "medium");
    }
    else if(filter === "high"){
        return state.todo.tasks.filter((task)=>task.priority === "high");
    }else{
        return state.todo.tasks;
    }
}
export const selectFilter = (state:RootState)=>{
    return state.todo.filter
}
export const {addTask,  toggleCompleteState,  deleteTask,  updateFilter} = taskSlice.actions;

export default taskSlice.reducer;
