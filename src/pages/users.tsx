import { AddUserModal } from "@/components/module/users/AddUserModal";
export default function Users(){
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
            <h1>Users</h1>
             <AddUserModal/>
            </div>
            <div className="grid gap-4 grid-cols-2">
               
            </div>
        </div>
    )
}