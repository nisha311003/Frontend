// import React, { useReducer } from 'react'

// function reducer(state, action){
//   switch (action.type) {
//     case "INCREMENT":
//       return state+1;
//     case "DECREMENT":
//       return  state >0 ? state-1: state;
//     case "RESET":
//       return 0; 
//   }
// }
// const App = () => {

//   let [state, dispatch] = useReducer(reducer, 0)
//   return (
//     <div style={{textAlign:"center", border:"1px solid grey", width:"350px", padding:"10px 10px", margin:"100px auto",height:"130px", borderRadius:"10px", backgroundColor:"#eee"}}>
//       <h1>Count: {state}</h1>
//       <button style={{marginRight:"10px", border:"none",borderRadius:"8px", padding:"8px 16px", backgroundColor:"green", color:"white"}} 
//       onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
//       <button style={{marginRight:"10px", border:"none",borderRadius:"8px", padding:"8px 16px", backgroundColor:"orange", color:"white"}} 
//       onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
//       <button style={{marginRight:"10px", border:"none",borderRadius:"8px", padding:"8px 16px", backgroundColor:"maroon", color:"white"}} 
//       onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
//     </div>
//   )
// }

// export default App

import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

const App = () => {
  let count = useSelector((state)=>{
    return state.count
  })
  /*useSelector() is a hook used to get the data or read the data from the store so it will accept callback function.
   Callback function accepts one parameter. That parameter is nothing but store automatically it comes from redux store */

  let dispatch = useDispatch()
  /*useDispatch() is a hook used to send the action objects */
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
    </div>
  )
}

export default App
