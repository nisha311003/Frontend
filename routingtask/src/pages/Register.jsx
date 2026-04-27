import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let[userData, setUserData] = useState({
        name:"",
        password:""
    })
    let navigate = useNavigate()
    function handleChange(e){
        let {name, value} = e.target
        setUserData({
            ...userData,
            [name]: value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        if(userData.name ==="" || userData.password===""){
            alert("Please fill all the fields")
            return
        }
        localStorage.setItem("data", JSON.stringify(userData))
        alert("Registered Successfully")
        navigate("/login")

    }
  return (
    <div style={{margin:"100px auto",border:"2px solid grey", borderRadius:"10px", width:"400px", textAlign:"center", padding:"20px 10px 40px"}}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input style={{width:"70%", borderRadius:"8px", border:"1px solid grey", padding:"5px"}} type="text" placeholder='Enter your name' name='name' value={userData.name} onChange={handleChange}/>
        <br /><br />
        <input style={{width:"70%", borderRadius:"8px", border:"1px solid grey", padding:"5px"}} type="password" placeholder='Enter your password' name='password' value={userData.password} onChange={handleChange}/>
        <br /><br />
        <button style={{width:"70%",backgroundColor:"darkorange", color:"white", border:"none", padding:"8px 16px ", borderRadius:"8px"}}>Register</button>
      </form>
    </div>
  )
}

export default Register
