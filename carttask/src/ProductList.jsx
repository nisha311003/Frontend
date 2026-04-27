import React from 'react'

const ProductList = (prop) => {
  // console.log(prop.product);
  // console.log(prop.addToCart);
  
  let items = prop.product
  console.log(items);
  
  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{color:"#530802"}}>Products</h2><br /><br />
      <div style={{
        display:"flex", 
        flexWrap:"wrap",
        justifyContent:"center", 
        alignContent:"flex-start",
        gap:"20px", 
        padding:"0px 20px",
        marginTop:"-30px"
        }}>
      {items.map((ele,index)=>{
        return (
          <div key={index} style={{border:"none", padding:"25px", backgroundColor:"white", borderRadius:"10px"}}>
            <img src={ele.image} alt="" height={120} width={120} style={{borderRadius:"20px", mixBlendMode:"multiply"}}/>
            <p>Name: <b>{ele.iname}</b></p>
            <p>Price: <b>{ele.price}</b></p>
            <button onClick={()=>{prop.addToCart(ele)}} style={{border:"none", backgroundColor:"#8b261f", borderRadius:"10px", padding:"5px 14px", color:"white"}}>Add to Cart</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default ProductList
