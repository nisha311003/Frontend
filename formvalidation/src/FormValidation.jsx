import React, { useState } from 'react'

const FormValidation = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let[nameError, setNameError] = useState("")
    let [emailError, setEmailError] = useState("")
    let[passwordError, setPasswordError] = useState("")

    function handleName(e){
        let value = e.target.value
        let regex = /^[A-Za-z]{3,10}$/
        setName(value)
        if(value ==="") 
            setNameError("Name is required")
        else if(!regex.test(value))
            setNameError("Name is invalid")
        else
            setNameError("")
    }
    function handleEmail(e){
        let value = e.target.value
        let regex = /^[A-Za-z0-9]+@[a-z.-]+\.[a-z]{2,}$/
        setEmail(value)
        if(value ==="") 
            setEmailError("Email is required")

        else if(!regex.test(value)) 
            setEmailError("Email is invalid")
        else
            setEmailError("")
    }
    function handlePassword(e){
        let value = e.target.value
        setPassword(value)
        if(value.length<=6) 
            setPasswordError("Password must be 6+ chars")
        else
            setPasswordError("")
    }
    function handleSubmit(e){
        e.preventDefault()

        if(name !=="" && email.includes("@") && password.length>6){
            alert("Form submitted successfully")
            setName("")
            setEmail("")
            setPassword("")
        }else{
            alert("Submit valid details!!!")
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={handleName}/>
        <br />
        <span style={{color:"red"}}>{nameError}</span>
        <br /><br />
        <input type="text" placeholder='Enter your email' value={email} onChange={handleEmail}/>
        <br />
        <span style={{color:"red"}}>{emailError}</span>
        <br /><br />
        <input type="text" placeholder='Enter your password' value={password} onChange={handlePassword}/>
        <br />
        <span style={{color:"red"}}>{passwordError}</span>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
