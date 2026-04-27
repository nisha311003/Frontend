import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let obj =useParams()
    let {id} = obj;
    let [itemData, setItemData] = useState({})
    useEffect(()=>{
        async function handleItem(){
            let res =await fetch(`https://fakestoreapi.com/products/${id}`)
            let data = await res.json()
            setItemData(data)
        }
        handleItem()
    },[])
  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <img src={itemData.image} alt="" height={200} width={200}/>
        <p>Title: <b>{itemData.title}</b></p>
        <p>Category: <b>{itemData.category}</b></p>
        <p>Price: <b>{itemData.price}</b></p>
        
      </div>
    </div>
  )
}

export default ProductDetails
