import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    function increase(){
        setCount(count+1)
    }
    function decrease(){
        if(count>0){
            setCount(count-1)
        }
    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
      <p>Count Value: <b>{count}</b></p>
      <button style={{backgroundColor:"green", color:"white", padding:"5px 14px", border:"none", borderRadius:"5px"}}
       onClick={increase}>Increment</button>
      <button style={{margin:"10px", backgroundColor:"red", color:"white", padding:"5px 14px",border:"none", borderRadius:"5px"}} 
      onClick={decrease}>Decrement</button>
      <button style={{backgroundColor:"blue", color:"white", padding:"5px 14px",border:"none", borderRadius:"5px"}} 
      onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
