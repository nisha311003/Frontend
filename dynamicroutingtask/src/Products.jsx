import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
const Products = () => {
    let [products, setProducts] = useState([])

    useEffect(()=>{
        async function handleProducts(){
           let res = await fetch("https://fakestoreapi.com/products")
           let data = await res.json()
           setProducts(data)
        }
        handleProducts()
    },[])
  return (
    <div style={{textAlign:"center", backgroundColor:"#f2a5e7", margin:"-21px"}}>
      <h1>Products</h1> 
      <div style={{display:"flex", gap:"20px", justifyContent:"center", flexWrap:"wrap"}}>
        {products.map((item)=>{
            return(
                <div key={item.id} style={{width:"300px", textAlign:"center", border:"1px solid grey", padding:"20px", borderRadius:"10px", backgroundColor:"#eee"}}>
                    <img src={item.image} alt="" height={150} width={150}/>
                    <p>Title: <b>{item.title}</b></p>
                    <p>Price: <b>{item.price}</b></p>
                    <button style={{backgroundColor:"royalblue", padding:"8px 14px", border:"none", borderRadius:"8px"}}>
                        <Link to={`/products/${item.id}`} style={{color:"white", textDecoration:"none"}}>View Details</Link>
                        </button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products
