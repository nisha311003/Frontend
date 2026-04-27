import React, { useState } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'

import Headphone from '../src/assests/headphone.png'
import Watches from '../src/assests/watches.png'
import Shoes from '../src/assests/shoes.png'
import Jackets from '../src/assests/jackets.png'
import Tablet from '../src/assests/tablet.png'

const App = () => {
  const products=[
    {
      image: Headphone,
      iname: "Headphone",
      price: 1000
    },
    {
      image: Watches,
      iname: "Watch",
      price: 800
    },
    {
      image: Shoes,
      iname: "Shoes",
      price: 955
    },
    {
      image: Jackets,
      iname: "Jacket",
      price: 2000
    },
    {
      image: Tablet,
      iname: "Tab",
      price: 50000
    }
  ]
  let [cartItems, setCartItems] = useState([])
  let [cartCount, setCartCount] = useState(0)


  let addToCart=(product)=>{
    setCartItems([...cartItems, product])
    setCartCount(cartCount+1)
  }

  let removeFromCart = (index)=>{
    setCartItems(cartItems.filter((ele, i)=>{
      return i !== index
    })
    
    )
    setCartCount(cartCount-1)
  }
  return (
    <div>
      <nav style={{
        padding: "10px", 
        fontSize:"20px", 
        textAlign:"center",
        backgroundColor:"#850d04",
        color:"#f7e0de",
        fontWeight:"bold"
      }}>
        My Website</nav>
      <div style={{display:"flex"}}>
        <div style={{width: "50%", backgroundColor:"#f7d0a4", border:"1px solid #850d04", minHeight:"100vh"}}>
          <ProductList product={products} addToCart={addToCart}/>
        </div>
        <div style={{width:"50%", backgroundColor:"#f7d0a4", border:"1px solid #850d04", minheight:"100vh"}}>
          <Cart cartItems={cartItems} count={cartCount} removeFromCart={removeFromCart}/>
        </div>
      </div>
    </div>
  )
}

export default App
