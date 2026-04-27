import React from 'react'
import {useNavigate}  from "react-router-dom"
const Welcome = () => {
    let navigate = useNavigate()
  return (
    <div style={{textAlign:"center"}}>
      <h1>Welome to My Website....😉</h1>
      <button style={{backgroundColor:"blue", color:"white", border:"none", padding:"8px 16px ", borderRadius:"8px", marginRight:"20px"}} onClick={()=>{navigate("/login")}}>Login</button>
      <button style={{backgroundColor:"darkorange", color:"white", border:"none", padding:"8px 16px ", borderRadius:"8px", marginRight:"20px"}} onClick={()=>{navigate("/register")}}>Register</button>
    </div>
  )
}

export default Welcome
