import { AddtaskModal } from "@/components/module/tasks/AddtaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import {  selectTasks } from "@/redux/featurs/task/taskSlice"
import { useAppSelector } from "@/redux/hook"


export default function Tasks(){
    const tasks = useAppSelector(selectTasks);

    console.log(tasks);
    
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
           <div className="flex justify-between items-center">
             <h1>Tasks</h1>
             <AddtaskModal/>
           </div>
           <div className="space-y-5 mt-5">
               {
                tasks.map(task=>
                    <TaskCard task={task} key={task.id}
                    ></TaskCard>
                )
               }
           </div>
        </div>
    )
}