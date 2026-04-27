// import React, { use, useState } from 'react'

// const App = () => {
//   let[name, setName] = useState("")
//   let[email, setEmail] = useState("")
//   // function greeting(){
//   //   alert("Good morning!!")
//   // }
//   // function sayHello(student){
//   //   alert(`Hello ${student}`)
//   // }
//   // function checking(e){
//   //   console.log(e);
//   //   console.log(e.target);
//   //   console.log(e.target.innerText);
    
    
//   // }
//   function handleChange(e){
//     // console.log(e.target.value);
//     setName(e.target.value) 
//   }
//   function handleEmail(e){
//     setEmail(e.target.value)
//   }
//   function handleSubmit(e){
//     e.preventDefault();
//     // alert("Form submitted!!")
//     console.log(e);
//     console.log(name);
//     console.log(email);
//     e.target[0].value=""
//     e.target[1].value=""

  
//   }
//   return (
//       <div>  

//       {/* <button onClick={greeting}>Click </button><br /><br />
//       <button onClick={()=>{alert("Inline event")}}>Click inline</button> <br /><br />
//       <button onClick={()=>{
//         sayHello("Nisha")
//       }}>
//         Say hello</button>
//       <h2>Event Object Example</h2>
//       <button onClick={checking}>Click me</button> */}

//       {/* <p>Name: <b>{name}</b></p>
//       <input onChange={handleChange} type="text"  placeholder='Type here'/>
//       <p>Email: <b>{email}</b></p>
//       <input onChange={handleEmail} type="email" placeholder='Enter email'/><br /><br /> */}

//       <p>onSubmit Event</p>
//       <form onSubmit={handleSubmit}>
//         <input onChange={handleChange} type="text" placeholder='Enter your Name'/><br /><br />
//         <input onChange={handleEmail} type="email" placeholder='Enter your Email' /><br /><br />
//         <button type='submit'>Submit</button>
//       </form>
//       <p>Name: <b>{name}</b></p>
//       <p>Email: <b>{email}</b></p>
//     </div>
//   ) 
// }

// export default App

// import React from 'react'

// const App = () => {
//   function handleKeyDown(e){
//     console.log("Key pressed: ", e.key);
     
//   }
//   function stop(e){
//     e.preventDefault()
//   }
//   return (
//     <div>
//       <input type="text"  onKeyDown={handleKeyDown}/><br /><br />
//       {/* it will return the key which is pressed */}
//       <a href="http://youtube.com" onClick={stop}>Don't go to Youtube</a>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import ConditionalExamples from './ConditionalExamples';

const App = () => {
  let [color, setColor] = useState("red")
  function handleMouseOver(e){
    console.log(e);
    setColor("orange")
    
  }
  function handleMouseLeave(e){
    setColor("blue")
  }
  return (
    <div>
      {/* <div style={{height:"500px", width:"500px", border:"2px solid black", backgroundColor:color}} 
      onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}> */}
      {/* </div> */}
      <ConditionalExamples/>
    </div>
  )
}

export default App
