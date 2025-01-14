import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/featurs/user/userSlice";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

interface IProps {
    user:IUser
}
export default function UserCard({user}:IProps){
    const dispatch = useDispatch();
    return (
        <div className="border border-gray-200 px-6 py-5 rounded-lg shadow-md bg-white">
           <div className="flex justify-between items-center">

            <h1 className="text-lg font-semibold ">{user.name}</h1>

           </div>
           <div>
           <Button onClick={()=>dispatch(removeUser(user.id))}
          variant="ghost"
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
           </div>
        </div>

    )
}