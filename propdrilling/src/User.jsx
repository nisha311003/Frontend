import React, { useContext } from 'react'
import UsernameContext from './UserContext'

const User = () => {
    let result =useContext(UsernameContext)
  return (
    <div style={{padding:"20px", fontSize:"18px"}}>
      <span>👤Username: <i>{result}</i></span>
    </div>
  )
}

export default User
 