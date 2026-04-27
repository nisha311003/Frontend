import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    function handleClick(){
        navigate("/")
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Login Page</h1>
      <button onClick={handleClick} style={{backgroundColor:"green", color:"white", padding:"10px 16px", border:"none", borderRadius:"10px"}}>Go to Home Page</button>
    </div>
  )
}

export default Login
