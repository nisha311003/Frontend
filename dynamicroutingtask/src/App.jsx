import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Products from './Products'
import ProductDetails from './ProductDetails'

let router =createBrowserRouter([
  {
    path:"/",
    element:<Products/>
  },
  {
    path:"/products/:id",
    element:<ProductDetails/>
  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
