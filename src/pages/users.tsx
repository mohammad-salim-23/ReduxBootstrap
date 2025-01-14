import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/userscard";
import { selectUsers } from "@/redux/featurs/user/userSlice"
import { useAppSelector } from "@/redux/hook"


export default function Users(){
    const users = useAppSelector(selectUsers);
   
    console.log(users);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
            <h1>Users</h1>
             <AddUserModal/>
            </div>
            <div className="grid gap-4 grid-cols-2">
                {
                    users.map(user=>
                        <UserCard user={user}
                        key = {user.id}>    
                        </UserCard>
                    )
                }
            </div>
        </div>
    )
}