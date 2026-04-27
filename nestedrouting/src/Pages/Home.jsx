import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate =useNavigate()
    function handleClick(){
        navigate("/about")
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Home Page</h1>
      <button onClick={handleClick} style={{backgroundColor:"green", color:"white", padding:"10px 16px", border:"none", borderRadius:"10px"}}>
        Go to About Page</button>
    </div>
  )
}

export default Home
