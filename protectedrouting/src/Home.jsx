import React from 'react'
import {useNavigate} from "react-router-dom"
const Home = () => {
    let navigate= useNavigate()
    let trumpData=JSON.parse(localStorage.getItem("currentUser"))
    function handleClick(){
           localStorage.removeItem("currentUser")
               navigate("/login")
    }
  return (
    <div>
      <h1>Welcome, <b>{trumpData.name}</b> </h1>
          <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Home
