import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{backgroundColor:"#eee", padding:"17px", display:"flex", justifyContent:"center", gap:"20px"}}>
        <Link style={{textDecoration:"none", color:"black"}} to="/home">Home</Link>
        <Link style={{textDecoration:"none", color:"black"}} to="/about">About</Link>
        <Link style={{textDecoration:"none", color:"black"}} to="/contact">Contact</Link>
        <Link style={{textDecoration:"none", color:"black"}} to="/services">Services</Link>
    </div>
  )
}

export default Navbar
