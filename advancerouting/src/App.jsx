import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'
import Services from './Services'
import Dashboard from './Dashboard'
import Users from './Users'
import Courses from './Courses'

let router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:"users",
            element:<Users/>
          },
          {
            path:"courses",
            element:<Courses/>
          }
        ]
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
