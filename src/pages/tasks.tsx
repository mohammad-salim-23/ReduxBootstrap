import { AddtaskModal } from "@/components/module/tasks/AddtaskModal";
import TaskCard from "@/components/module/tasks/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  selectTasks, updateFilter } from "@/redux/featurs/task/taskSlice"
import { useAppSelector } from "@/redux/hook"
import { useDispatch } from "react-redux";


export default function Tasks(){
    const tasks = useAppSelector(selectTasks);
     const dispatch = useDispatch();
    console.log(tasks);
    
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
           <div className="flex justify-between items-center">
             <h1>Tasks</h1>
             <Tabs defaultValue="all">
             <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger onClick={()=> dispatch(updateFilter("all"))}
     value="all">All</TabsTrigger>
    <TabsTrigger onClick={()=> dispatch(updateFilter("low"))} 
     value="low">Low</TabsTrigger>
    <TabsTrigger onClick={()=> dispatch(updateFilter("medium"))}
     value="medium">Medium</TabsTrigger>
    <TabsTrigger 
    onClick={()=> dispatch(updateFilter("high"))}
     value="high">High</TabsTrigger>
  </TabsList>
             </Tabs>
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