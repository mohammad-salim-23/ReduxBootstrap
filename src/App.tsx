import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/featurs/counter/counterSlice";

function App() {
  const dispatch  = useDispatch();
  const {count} = useSelector((state)=>state.counter);
  const handleIncrement = ()=>{
    dispatch(increment());
  };
  const handleDecrement = ()=>{
    dispatch(decrement());
  }
  return (
    <div>
      <h1>Counter with Redux</h1>
      <button onClick={handleIncrement}>Increment</button>
      <div className="">{count}</div>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default App
