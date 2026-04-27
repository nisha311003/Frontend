// import React from 'react'
// import {Link} from 'react-router-dom'
// const NavBar = () => {
//   return (
//     <div style={{backgroundColor:"black", display:"flex", padding:"30px", justifyContent:"center", gap:"40px"}}>
//       <Link to="/" style={{color:"white", textDecoration:"none", fontSize:"18px"}}>HOME</Link>
//       <Link to="/about" style={{color:"white", textDecoration:"none", fontSize:"18px"}}>ABOUT</Link>
//       <Link to="/contact" style={{color:"white", textDecoration:"none", fontSize:"18px"}}>CONTACT</Link>
//       <Link to="/services" style={{color:"white", textDecoration:"none", fontSize:"18px"}}>SERVICES</Link>
//       <Link to="/login" style={{color:"white", textDecoration:"none", fontSize:"18px"}}>LOGIN</Link>
     
//     </div>
//   ) 
// }

// export default NavBar
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
let NavLinkStyles =({isActive})=>({
    color:isActive?"skyblue":"white",
    textDecoration:"none",
    fontSize:"18px"
})
const NavBar = () => {
  return (
    <div style={{backgroundColor:"black", display:"flex", padding:"30px", justifyContent:"center", gap:"40px"}}>
      <NavLink to="/" style={NavLinkStyles}>HOME</NavLink>
      <NavLink to="/about" style={NavLinkStyles}>ABOUT</NavLink> 
      <NavLink to="/contact" style={NavLinkStyles}>CONTACT</NavLink>
      <NavLink to="/services" style={NavLinkStyles}>SERVICES</NavLink>
      <NavLink to="/login" style={NavLinkStyles}>LOGIN</NavLink>
     
    </div>
  ) 
}

export default NavBar

