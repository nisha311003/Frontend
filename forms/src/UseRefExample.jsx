import React, { useRef } from 'react'

const UseRefExample = () => {
    let nameRef = useRef()
    let emailRef = useRef()
    function handleSubmit(e){
        e.preventDefault()
        let name = nameRef.current.value  
        let email = emailRef.current.value 
        console.log("Name: ", name);
        console.log("Email: ", email);
        
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder='Enter your name'/>
        <br /><br />
        <input ref={emailRef} type="text" placeholder='Enter your email'/>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UseRefExample
