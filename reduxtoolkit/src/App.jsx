import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, reset} from "../src/Slice.jsx"
const App = () => {
  let count = useSelector((state)=>{
    // console.log(state);
    
    return state.myCounter.count
  })
  let dispatch = useDispatch()
  return (
    <div style={{textAlign:"center", marginTop:"40px"}}>
      <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default App
