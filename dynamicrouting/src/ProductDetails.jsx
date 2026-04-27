import React, { useEffect, useState } from 'react'
import items from '../src/Data.jsx'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
    let obj=useParams()
    console.log(obj);
    let {id} = obj
    let [productData, setProductData] = useState({})
    useEffect(()=>{
        async function handleData(){
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            let data = await response.json()
            setProductData(data)
        }
        handleData()
    },[])
    function handleClick(){
        alert("Item added successfully!!!")
    }
    
  return (
    <div style={{padding:"10px",backgroundColor:"#eee",width:"450px", border:"1px solid grey", margin:"100px auto", textAlign:"center", borderRadius:"10px"}}>
      <h1>Product Details</h1>
      <hr />
      <img src={productData.image} alt="" height={150} width={150}/>
      <p>Title: <b>{productData.title}</b></p>
      <p>Category: <b>{productData.category}</b></p>
      <p>Price: <b>{productData.price}</b></p>
      <button onClick={handleClick} 
      style={{backgroundColor:"green", padding:"8px 20px", border:"none", 
      borderRadius:"8px", marginBottom:"20px"}}>
        Add to Cart</button>
        
    </div>
  )
}

export default ProductDetails
