import {  selectTasks } from "@/redux/featurs/task/taskSlice"
import { useAppSelector } from "@/redux/hook"

export default function Tasks(){
    const tasks = useAppSelector(selectTasks);

    console.log(tasks);
    
    return (
        <div>
            <h1>This is tasks component</h1>
        </div>
    )
}