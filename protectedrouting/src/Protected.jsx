import React from 'react'
import {Navigate} from "react-router-dom"
const Protected = (prop) => {
    let {children}=prop
    let naina=JSON.parse(localStorage.getItem("currentUser"))
    if(!naina){
        return <Navigate to="/login"></Navigate>
    }
    return children
 
}

export default Protected