import React from 'react'
import Trainer from './Trainer'
import Topper from './Topper'
import Duller from './Duller'

const Classroom = () => {
  return (
    <div style={
        {
            border:"1px solid grey", 
            height: "300px", 
            width:"500px", 
            textAlign:"center", 
            padding:"20px",
            margin: "100px auto",
            backgroundColor:"#fefcfc"
        }
        }>
      <h1>906A CSE Class Room 🏛️</h1>
      <Trainer/>
      <Topper/>
      <Duller/>

    </div>
  )
}

export default Classroom
