import React from 'react'
import {Link, Outlet} from "react-router-dom"
const Dashboard = () => {
  return (
    <div style={{display:"flex", height:"100vh"}}>
      <div style={{display:"flex", flexDirection:"column", gap:"10px", backgroundColor:"#cc5df5", width:"30%", height:"100vh"}}>
        <h2>Dashboard</h2>
        <Link style={{color:"black", textDecoration:"none", fontSize:'20px', fontWeight:"bold"}} to="users">Users</Link>
        <Link style={{color:"black", textDecoration:"none", fontSize:'20px', fontWeight:"bold"}} to="courses">Courses</Link>
      </div>
      <div style={{textAlign:"center", backgroundColor:"#eee", width:"70%"}}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
