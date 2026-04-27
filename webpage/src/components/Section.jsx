import React from 'react'
import Dhoni from '../assests/dhoni.png'
const Section = () => {
  return (
    <div style={{backgroundColor:"#eee", height:"530px", border:"1px solid grey", textAlign:"center", fontSize:"18px"}}>
      <img src={Dhoni} alt="" style={{paddingTop: "35px", borderRadius:"10px"}} width={"320px"} height={"275px"}/>
      <p> <u>Name of the cricketer:</u> <b> MS Dhoni</b></p>
      <p> <u>Date of birth:</u> <b>7th July 1981</b></p>
      <p> <u>No. of matches played:</u> <b>ODIs: 350</b></p>
      <p> <u>Wife:</u> <b>Sakshi Dhoni</b></p>
      <button style={{border: "none", backgroundColor:"#2f04cb", color:"white", borderRadius:"5px", padding:"6px 14px"}}>Follow</button>
    </div>
  )
}

export default Section
