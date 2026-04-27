import React from 'react'
import Child from './Child'
import Image from '../src/assests/lpu.png'
const Father = () => {
    // let address={
    //     collegeName: "LPU",
    //     city: "Phagwara",
    //     state: "Punjab",
    //     pincode: 144411 
    // }
    // function Break(){
    //   alert("Break is over!!!")
    // }
    // let trainers = ["Hari 😑", "Sushant 😁", "Kalam 😎"]
  return (
    <div style={{
      border:"1px solid grey",
      width:"500px",
      textAlign:"center",
      margin:"20px auto"
    }}>
      {/* <Child lunchBox="Upma 🍛🍚" pocketMoney={500} data={address} collegeName="Lovely Professional University" image={Image}/> */}
      {/* <Child bell={Break}/> */}
      {/* <Child support={trainers}/> */}
      <Child trainerName="Hari" rating="0"/>
      <Child trainerName="Sushant" rating="4"/>
      <Child trainerName="Kalam" rating="5"/>
    </div>
  )
}

export default Father
