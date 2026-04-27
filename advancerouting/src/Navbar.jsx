import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center", gap:"40px", padding:"20px", backgroundColor:"purple"}}>
        <Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link>
        <Link style={{color:"white", textDecoration:"none"}} to="about">About</Link>
        <Link style={{color:"white", textDecoration:"none"}} to="contact">Contact</Link>
        <Link style={{color:"white", textDecoration:"none"}} to="services">Services</Link>
        <Link style={{color:"white", textDecoration:"none"}} to="dashboard">Dashboard</Link>
      </div>
      <div style={{border:"1px solid gray",height:"100vh", textAlign:"center"}}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Navbar
