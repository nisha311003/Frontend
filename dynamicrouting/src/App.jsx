import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Products from './Products'
import ProductDetails from './ProductDetails'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
