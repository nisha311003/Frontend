import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
