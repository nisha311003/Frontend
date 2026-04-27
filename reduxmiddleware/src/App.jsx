import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Action/Action'

const App = () => {

  let dispatch = useDispatch()
  let {products, loading, error}=useSelector((state)=>state)

  useEffect(()=>{
    dispatch(fetchData())
  }, [dispatch])
  return (
    <div style={{textAlign:"center", backgroundColor:"#f0d8b6", padding:"10px"}}>
      <h2>Products List</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px"}}>
        {products.map((p)=>{
          return (
          <div key={p.id} style={{border:"1px solid whitesmoke", backgroundColor:"#f0f0d6",padding:"30px", textAlign:"center",
           width:"275px", height:"275px", borderRadius:"10px", boxShadow:"1px 1px whitesmoke"}}>
            <img src={p.image} alt="" height={100} width={100}/>
            <p>Title: <b>{p.title}</b></p>
            <p>Category: <b>{p.category}</b></p>
            <p>Price: <b>{p.price}</b></p>
            <button style={{backgroundColor:"darkblue", border:"none", padding:"6px 14px", borderRadius:"8px", color:"white"}}>Buy Now</button>
          </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
