// import React from 'react'
// import { useRef } from 'react'

// const UseRef = () => {
//     let nameRef = useRef()
//     function login(e){
//         e.preventDefault()
//         nameRef.current.focus()
//     }
//   return (
//     <div>
//       <form onSubmit={login}>
//         <input ref={nameRef} type="text" placeholder='Enter your name'/><br /><br />
//         <input type="text" placeholder='Enter your email'/><br /><br />
//         <button>Login</button>
//       </form>
//     </div>
//   )
// }  

// export default UseRef
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
    let countRef = useRef(0)
    let [count, setCount] = useState(0)
    function handleRef(){
        countRef.current++;
        console.log(countRef.current);
        
    }
    function handleState(){
        setCount(count+1)
    }
  return (
    <div>
      <p>Count Ref value: <b>{countRef.current}</b></p>
      <p>State count value: <b>{count}</b></p>

      <button onClick={handleState}>State count btn</button>
      <button onClick={handleRef}>Ref count btn</button>
    </div>
  )
}

export default UseRef

