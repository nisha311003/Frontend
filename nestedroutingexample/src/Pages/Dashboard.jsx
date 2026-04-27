import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{display:"flex"}}>
        <div style={{backgroundColor:"#eee", height:"100vh", padding:"20px 70px"}}>
            <h1>Dashboard</h1>
            <Link to='users' style={{fontSize:"20px", textDecoration:"none", color:"#262626", fontWeight:"bold"}}>Users</Link><br /><br />
            <Link to='settings' style={{fontSize:"20px", textDecoration:"none", color:"#262626", fontWeight:"bold"}}>Settings</Link>
        </div>
        <div style={{backgroundColor:"#318a2b", flexGrow:"1", padding:"20px", textAlign:"center"}}>
            <h1>Content</h1>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard
