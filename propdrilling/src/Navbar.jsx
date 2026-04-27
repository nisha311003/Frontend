import React from 'react'
import Profile from './Profile'
const Navbar = () => {
    
  return (
    <div style={{backgroundColor:"#f29163", padding:"5px"}}>
      <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", color:"#1f1e1e"}}>
        <h2>My Website </h2>
        <Profile/>
      </nav>
    </div>
  )
}

export default Navbar
