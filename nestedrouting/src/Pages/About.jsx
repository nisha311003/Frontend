import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    let navigate =useNavigate()
    function handleClick(){
        navigate("/contact")
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>About page</h1>
      <button onClick={handleClick} style={{backgroundColor:"green", color:"white", padding:"10px 16px", border:"none", borderRadius:"10px"}}>Go to Contact Page</button>
    </div>
  )
}

export default About
