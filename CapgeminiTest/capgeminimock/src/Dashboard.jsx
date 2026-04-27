import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Dashboard = () => {
  return (
    <div style={{display:"flex"}}>
      <div style={{display:"flex", flexDirection:"column", backgroundColor:"#eee", height:"100vh", width:"30%", textAlign:"center", padding:"20px", gap:"10px", fontWeight:"bold"}}>
        <h2>Dashboard</h2>
        <Link style={{color:"black", textDecoration:"none"}} to="user">Users</Link>
        <Link style={{color:"black", textDecoration:"none"}} to="settings">Settings</Link>
      </div>
      <div style={{width:"70%", padding:"20px"}}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
