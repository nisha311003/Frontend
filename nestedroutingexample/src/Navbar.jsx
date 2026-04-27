import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{backgroundColor:"black", display:"flex", gap:"20px", justifyContent:"center", padding:"18px"}}>
      <Link to="/" style={{color:"white", textDecoration:"none"}}>Home</Link>
      <Link to="/about" style={{color:"white", textDecoration:"none"}}>About</Link>
      <Link to="/contact" style={{color:"white", textDecoration:"none"}}>Contact</Link>
      <Link to="/dashboard" style={{color:"white", textDecoration:"none"}}>Dashboard</Link>
    </div>
  )
}

export default Navbar
