import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
const Login = () => {
   
     let navigate= useNavigate()
  let [logindata,setLogindata]= useState({
        name:"",
        password:""
    })

    function handleChange(e){
        let {name,value}= e.target
        setLogindata({
            ...logindata,
             [name]:value
        })
    }


    function handleSubmit(e){
           e.preventDefault()
           if(logindata.name===""|| logindata.password===""){
            alert("Please fill all the fields")
            return;
           }
        let storedData= JSON.parse(localStorage.getItem("user"))

        if(!storedData){
            alert("user not found. please register first")
            // navigate("/register")
            return;
        }

        if(logindata.name===storedData.name && logindata.password===storedData.password){
              localStorage.setItem("currentUser",JSON.stringify(storedData))
              navigate("/home")
             return
        }
        else{
            alert("Invalid credentials")
        }

          
    }

  return (
    <div>
      <form onSubmit={handleSubmit} >
            <input name='name' onChange={handleChange} value={logindata.name} type="text" placeholder='enter name' /> <br /><br />
            <input name='password' onChange={handleChange} value={logindata.password} type="text" placeholder='enter password' /><br /><br />
            <button>Login</button>
          </form>
    </div>
  )
}

export default Login