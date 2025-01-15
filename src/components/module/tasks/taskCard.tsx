import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Itask } from "@/types";
import { Trash2 } from "lucide-react";
interface IProps {
  task: Itask;
}

export default function TaskCard({ task }: IProps) {

  
  return (
    <div className="border border-gray-200 px-6 py-5 rounded-lg shadow-md bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        {/* Task Icon and Title */}
        <div className="flex items-center gap-4">
          {/* Priority Indicator */}
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-white font-medium",
              {
                "bg-green-500": task.priority === "low",
                "bg-yellow-500": task.priority === "medium",
                "bg-red-500": task.priority === "high",
              }
            )}
          >
            {task.priority[0]} {/* First letter of the priority */}
          </div>

          {/* Task Title */}
          <h1 className={cn({ "line-through": task.isCompleted }, "text-lg font-semibold text-gray-800")}>{task.title}</h1>
         
        </div>

        {/* Action Button */}
        <div>
        <Button 
          variant="ghost"
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
        <input 
  type="checkbox"
  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
/>
        </div>
      </div>

   
      {/* Task Description */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {task.description}
      </p>
    </div>
  );
}
