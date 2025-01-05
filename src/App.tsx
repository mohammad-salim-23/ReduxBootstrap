
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import { Button } from "./components/ui/button";
// import { decrement, increment } from "./redux/featurs/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  //const dispatch  = useAppDispatch();
  // const {count} = useAppSelector((state)=>state.counter);
  // const handleIncrement = (amount:number)=>{
  //   dispatch(increment(amount));
  // };
  // const handleDecrement = ()=>{
  //   dispatch(decrement());
  // }
  return (
    <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
  )
}

export default App
