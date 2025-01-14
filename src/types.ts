export interface Itask {
    id: string
    title: string
    description: string
    dueDate: string
    isCompleted: boolean
    priority: "high"|"medium"|"low";
    assignedTo: string | null;
  }

  export interface IUser{
    name:string;
    id:string;
  }