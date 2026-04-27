import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  let [products, setProducts] = useState([])
  useEffect(()=>{
    async function handleAxios(){
      try {

        let res = await  axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    handleAxios()
  }, [])
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px", margin:"30px auto"}}>
      {products.map((ele,index)=>{
        return(
          <div key={index} style={{border:"1px solid black", width:"350px", textAlign:"center", padding:"15px 15px", borderRadius:"10px", backgroundColor:"#eee"}}>
            <img src={ele.image} alt="" height={100} width={100}/>
            <p>Title: <b>{ele.title}</b></p>
            <p>Price: <b>{ele.price}</b></p>
            <p>Category: <b>{ele.category}</b></p>
          </div>
        )
      })}
    </div>
  )
}

export default App
