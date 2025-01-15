import { AddtaskModal } from "@/components/module/tasks/AddtaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Tasks(){
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
           <div className="flex justify-between items-center">
             <h1>Tasks</h1>
             <Tabs defaultValue="all">
             <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger
     value="all">All</TabsTrigger>
    <TabsTrigger 
     value="low">Low</TabsTrigger>
    <TabsTrigger 
     value="medium">Medium</TabsTrigger>
    <TabsTrigger 
         value="high">High</TabsTrigger>
  </TabsList>
             </Tabs>
             <AddtaskModal/>
           </div>
           
           </div>
        
    )
}