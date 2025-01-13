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
                "bg-green-500": task.priority === "Low",
                "bg-yellow-500": task.priority === "Medium",
                "bg-red-500": task.priority === "High",
              }
            )}
          >
            {task.priority[0]} {/* First letter of the priority */}
          </div>

          {/* Task Title */}
          <h1 className="text-lg font-semibold text-gray-800">{task.title}</h1>
        </div>

        {/* Action Button */}
        <Button
          variant="ghost"
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>

      {/* Task Description */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        {task.description}
      </p>
    </div>
  );
}
