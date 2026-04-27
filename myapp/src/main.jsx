import React from 'react'
import { createRoot } from 'react-dom/client'
import Lpu from './Lpu'
import Nisha from './Nisha'
import YouthVibe from './YouthVibe'
import Family from './Family'
import Classroom from './Classroom'
import App from './App'

createRoot(document.getElementById('root')).render(

  // React.createElement("div",null, 
  //   React.createElement("p", null, "Mind is draining"),
  //   React.createElement("h2", null, "We have to wait for 40 min"),
  //   React.createElement("h1",null, "Students mind is getting blast 🫨"))

  // <div>
  //   <p>Mind is draining</p>
  //   <h2>We have to wait for 40 min</h2>
  //   <h1>Students mind is getting blast 🫨 </h1>
  // </div>

  // <Nisha/>
  // <YouthVibe/>
  // <Family/>
  <App/>
)
