import React from 'react'
import Headphone from '../src/assests/headphone.png'
import Watch from '../src/assests/watch.png'
import Shoes from '../src/assests/shoes.png'
import Ring from '../src/assests/ring.png'
import Products from './Products'
const Flipkart = () => {
    let products=[
        {
            image: Headphone,
            name: "Headphones",
            price: 500,

        },
        {
            image: Watch,
            name: "Watch",
            price: 2000
        },
        {
            image: Shoes,
            name: "Shoes",
            price: 1000
            

        },
        {
            image: Ring,
            name: "Ring",
            price: 5000
        }
    ]
  return (
    <div style={{margin:"100px auto"}}>
        
      <Products items={products}/>
    </div>
  )
}

export default Flipkart

