import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    let navigate = useNavigate()
    function handleClick(){
        navigate("/services")
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Contact page</h1>
      <button onClick={handleClick} style={{backgroundColor:"green", color:"white", padding:"10px 16px", border:"none", borderRadius:"10px"}}>Go to Services</button>
    </div>
  )
}

export default Contact
