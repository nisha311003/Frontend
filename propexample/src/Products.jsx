import React from 'react'

const Products = (prop) => {
    console.log(prop);
    let {items} = prop;
    console.log(items);
    
    
  return (
    <div style={
        {
            display:"flex",
            flexWrap:"wrap", 
            justifyContent:"center",
            gap:"50px",
        }}>
        {items.map((ele, index)=>{
            return(
                <div key={index} style={{
                    textAlign:"center", 
                    backgroundColor:"#f5d7b0", 
                    padding:"30px", 
                    fontSize:"17px",
                    fontWeight:"bold",
                    color:"#2f1502",
                    borderRadius: "10px"
                    }}>
                    <img src={ele.image} alt="" width={200} height={200}/>
                    <p>Product Name: {ele.name}</p>
                    <p>Price: {ele.price}</p>
                    <button style={{backgroundColor:"#6c1904", border:"none", borderRadius:"5px", color:"white", padding:"5px 12px"}}>Buy Now</button>
                </div>
                
            )
        })}
      
    </div>
  )
}

export default Products
