import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let [formData, setFormData]= useState({
        name:"",
        password:""
    })
    let navigate =useNavigate()
    function handleChange(e){
        let {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        if(formData.name ===""|| formData.password ===""){
            alert("Please fill all the details")
            return
        }
        let storedData = JSON.parse(localStorage.getItem("data"))
        if(!storedData){
            alert("User Not Found...")
            return
        }
        if(formData.name === storedData.name && formData.password === storedData.password){
            alert("Logged in Successfully")
            navigate("/home")
        }else{
            alert("Invalid credentials")
        }
    }
  return (
    <div style={{margin:"100px auto",border:"2px solid grey", borderRadius:"10px", width:"400px", textAlign:"center", padding:"20px 10px 40px"}}>
      
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input style={{width:"70%", borderRadius:"8px", border:"1px solid grey", padding:"5px"}} type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange}/>
        <br /><br />
        <input style={{width:"70%", borderRadius:"8px", border:"1px solid grey", padding:"5px"}} type="password" placeholder='Enter your password' name='password' value={formData.password} onChange={handleChange}/>
        <br /><br />
        <button style={{width:"70%",backgroundColor:"blue", color:"white", border:"none", padding:"8px 16px ", borderRadius:"8px"}}>Login</button>
      </form>
    </div>
  )
}

export default Login
