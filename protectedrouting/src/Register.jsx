import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Register = () => {
   let navigate= useNavigate()
  let [user,setUser]= useState({
        name:"",
        password:""
    })

    function handleChange(e){
        let {name,value}= e.target
        setUser({
            ...user,
             [name]:value
        })
    }


    function handleSubmit(e){
           e.preventDefault()
           if(user.name===""|| user.password===""){
            alert("Please fill all the fields")
            return;
           }
          localStorage.setItem("user", JSON.stringify(user))
          alert("Registered successfully")
           navigate("/login")
    }
  return (
    <div>
          <form onSubmit={handleSubmit} >
            <input name='name' onChange={handleChange} value={user.name} type="text" placeholder='enter name' /> <br /><br />
            <input name='password' onChange={handleChange} value={user.password} type="text" placeholder='enter password' /><br /><br />
            <button>Register</button>
          </form>
    </div>
  )
}

export default Register