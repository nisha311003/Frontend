import React from 'react'

const Cart = (prop) => {
  console.log(prop);
  
  let items = prop.cartItems 
  let count = prop.count
  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{color:"#530802"}}>Cart Count: {count}</h2>
      <div>
        {items.length ===0 ?<p>No items in cart</p>:
        
          <div style={{
            display:"flex", 
            flexWrap:"wrap",
            justifyContent:"center", 
            alignContent:"flex-start",
            gap:"20px", 
            padding:"0 20px",
        }}>
            {items.map((ele,index)=>{
              return(
                <div key={index} style={{border:"none", padding:"25px", backgroundColor:"white", borderRadius:"10px"}}>
                  <img src={ele.image} alt="" height={120} width={120} style={{borderRadius:"20px", mixBlendMode:"multiply"}}/>
                  <p>Name: <b>{ele.iname}</b></p>
                  <p>Price: <b>{ele.price}</b></p>
                  <button onClick={()=>{prop.removeFromCart(index)}} 
                  style={{border:"none", backgroundColor:"#8b261f", borderRadius:"10px", padding:"5px 14px", color:"white"}}>Remove</button>
                </div>
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
