import { Itask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState{
    task:Itask[]
}
const initialState = {
    task:[
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
    ]
};
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
});
export default taskSlice.reducer;
