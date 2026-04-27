import React, { useState } from 'react'
import Briyani from '../src/Images/briyani.png'
import Burger from '../src/Images/burger.png'
import Dhokla from '../src/Images/dhokla.png'
import Pizza from '../src/Images/pizza.png'
const App = () => {
  let [items, setItems] = useState([
    {
      image: Briyani,
      iname: "Briyani",
      price: 200
    },
    {
      image: Burger,
      iname: "Burger",
      price: 70
    },
    {
      image: Dhokla,
      iname: "Dhokla",
      price: 100
    },
    {
      image: Pizza,
      iname: "Pizza",
      price: 300
    }
  ])
  let [user, setUser] = useState([
    {
      name:"Ranjan",
      city:"Banglore",
      accNumber: 6325644522,
      bankType:"HDFC"
    },
    {
      name:"Monica",
      city:"Hyderabad",
      accNumber: 4756358736,
      bankType:"PNSB"
    }
  ])
  function handleAdd(){
    setUser([...user,{
      name:"Raman",
      city:"Hyderabad",
      accNumber: 745376573,
      bankType:"SBI"
    }])
  }
  return (
    <div style={{textAlign:"center"}}>
      <div style={
        {
        display:"flex", 
        flexWrap:"wrap",
        justifyContent:"space-between",
        margin:"30px 100px",
        

      }
      }>
        {items.map((ele, index)=>{
          return(
            <div key={index} style={{backgroundColor:"bisque",borderRadius:"8px",padding:"20px", textAlign:"center", fontWeight:"bold"}}>
              <img src={ele.image} alt="" height={180} width={180} style={{borderRadius:"10px"}}/>
              <p>Name of the food:  <br /><br /> {ele.iname}</p>
              <p>Price: {ele.price}</p>
              <button style={{backgroundColor:"maroon",color:"white", padding:"5px 14px", border:"none",
                borderRadius:"8px"
              }}>Buy Now</button>
            </div>
          )
        })}
      </div>
      <hr />
      {/*1. array of four objects image, name, price , buynow using useState
      2. array of two objects (user details-> name, city, account number and bank type) and button add objects -> one more object*/}
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px", margin:"20px 200px", padding:"20px"}}>
        {user.map((ele, index)=>{
          return(
            <div key={index} style={{backgroundColor:"#baf6ee",border:"1px solid #eee",borderRadius:"10px", padding:"20px", textAlign:"center"}}>
              <p>User Name: <b>{ele.name}</b></p>
              <p>City Name: <b>{ele.city}</b></p>
              <p>Account Number: <b>{ele.accNumber}</b></p>
              <p>Bank Type: <b>{ele.bankType}</b></p>
            </div>
          )
        })}
        
      </div>
      <button onClick={handleAdd} style={{padding:"8px 18px", backgroundColor:"blue", border:"none",borderRadius:"8px", color:"white"}}>Add Object</button> 
       
    </div>
  )
}

export default App
