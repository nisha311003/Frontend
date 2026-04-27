import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Routing = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <nav style={{backgroundColor:"skyblue", padding:"10px", display:"flex", justifyContent:"center", gap:"40px"}}>
        <Link style={{color:"black", textDecoration:"none"}} to="/">Home</Link>
        <Link style={{color:"black", textDecoration:"none"}} to="about">About</Link>
        <Link style={{color:"black", textDecoration:"none"}} to="contact">Contact</Link>
        <Link style={{color:"black", textDecoration:"none"}} to="dashboard">Dashboard</Link>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Routing
