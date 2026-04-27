import React from 'react'
import Form from './Form'
import Routing from './Routing'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Dashboard from './Dashboard'
import User from './User'
import Settings from './Settings'
import Home from './Home'

let router = createBrowserRouter([
  {
    path:"/",
    element:<Routing/>,
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
        path:"dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:"user",
            element:<User/>
          },
          {
            path:"settings",
            element:<Settings/>
          }
        ]
      }
    ]
  }
])
const App = () => {
  return (
    <div>
      <Form/>
      {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
  )
}

export default App
