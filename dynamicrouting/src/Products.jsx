import React, { useEffect, useState } from 'react'
import items from '../src/Data.jsx'
import { Link} from "react-router-dom"
const Products = () => {

    let [data, setData] = useState([])
    useEffect(()=>{
        async function handleFetch(){
            let response =await fetch("https://fakestoreapi.com/products")
            let actualData = await response.json()
            setData(actualData)
        }
        handleFetch()
    },[])
    
  return (
    <div style={{display:"flex", justifyContent:"center", margin:"40px auto", gap:"20px", flexWrap:"wrap"}}>
      {data.map((product)=>{
        return (
            <div key={product.id} style={{border:"1px solid grey", padding:"30px", textAlign:"center", borderRadius:"10px", width:"300px", backgroundColor:"#eee"}}>
                <img src={product.image} alt="" height={100} width={100}/><br />
                <p>Title: <b>{product.title}</b></p>
                <p>Category: <b>{product.category}</b></p>
                <p>Price: <b>{product.price}</b></p>
                <button style={{backgroundColor:"blue", padding:"8px 16px", border:"none",
                    borderRadius:"8px"
                }}><Link to={`/product/${product.id}`} style={{color:"white", textDecoration:"none"}}>View Details</Link></button>

            </div>
        )
      })}
    </div>
  )
}

export default Products
