// import React, { useState } from 'react'

// const ConditionalExamples = () => {
//     let [isLoggedIn, setIsLoggedIn] = useState(false)

//     function login(){
//         setIsLoggedIn(true)
//     }
//     function logout(){
//         setIsLoggedIn(false)
//     }
//   return (
//     <div>
//       {isLoggedIn? <div>
//         <h1>Welcome back user 😉</h1>
//         <p>You are successfully logged in</p>
//         <button onClick={logout}>Logout</button>
//       </div>: 
//       <div>
//         <h1>Please Login 😑</h1>
//         <p>You can access dashboard</p>
//         <button onClick={login}>Login</button>
//         </div>}
//     </div>
//   )
// }

// export default ConditionalExamples

// import React from 'react'

// const ConditionalExamples = () => {
//     let online = true;

//     let stockAvailable=true
//   return (
//     <div>
//       {online? "User is online 😎": "User is offline 😴"}
//       <br /><br />
//       {stockAvailable? <div>
//         <p>Stock is available</p>
//         <button>Buy Now</button>
//       </div>
//       : "Stock is not available....😑"}

//     </div>
//   )
// }

// export default ConditionalExamples


// import React, { useState } from 'react'

// const ConditionalExamples = () => {
//     let [showPassword, setShowPassword] = useState(false)

//     function showOrHide(){
//         setShowPassword(!showPassword)
//     }
//   return (
//     <div>
//       <input type={showPassword? "text":"password"} />
//       <button onClick={showOrHide}>{showPassword? "Hide": "Show"} password</button>
//     </div>
//   )
// }

// export default ConditionalExamples

// 

import React, { useEffect, useState } from 'react'

const ConditionalExamples = () => {
    let [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },4000)
    },[])
  return (
    <div>
      <h1>{loading? "Loading.....": "Data Loaded"}</h1>
    </div>
  )
}

export default ConditionalExamples


  