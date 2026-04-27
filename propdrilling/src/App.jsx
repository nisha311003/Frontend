import React from 'react'
import Profile from './Profile'
import Navbar from './Navbar'
import UsernameContext from './UserContext'

const App = () => {
  let username="Nisha"
  return (
    <div>
     <UsernameContext.Provider value={username}>
      <Navbar/>
     </UsernameContext.Provider>
    </div>
  )
}

export default App
 