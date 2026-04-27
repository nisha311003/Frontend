import React from 'react'

const Child = (prop) => {
    // console.log(prop);
    // console.log(prop.lunchBox);
    // let {lunchBox, pocketMoney, data, collegeName, image} = prop;
    // console.log(lunchBox);
    // console.log(pocketMoney);
    // console.log(data);
    
    // let {collegeName, city, state, pincode} = data;
    // console.log(prop);
    // let {bell} = prop;
    // console.log(bell);
    
    // console.log(prop);
    // let {support} = prop;
    
    // console.log(support);

    console.log(prop);
    let {trainerName, rating} = prop
    
    
  return (
    <div style={{
      backgroundColor:"black",
      color:"white",
      padding:"15px"
    }}>
      {/* <p>Father sent your favourite food: <b>{lunchBox} 😁</b></p>
      <p>Father sent you {pocketMoney} mojj karo 😏</p>
      <p>Name of the college: <b>{collegeName} 🏛️</b></p>
      <p>Name of the city: <b>{city}</b></p>
      <p>Name of the state: <b>{state}</b></p>
      <p>Address Pincode: <b>{pincode}</b></p> */}
      {/* <h1>Rey Dabba fellow this is your college name: <br /> <u style={{color:"black"}}>{collegeName}</u> 🏛️</h1>
      <p style={{fontSize:"25px"}}>Here is the College Image ⬇️</p>
      <img src={image} alt="" width={350}/> */}
      {/* <button onClick={bell}>Click</button> */}
      {/* {support.map((ele, index)=>{
        return(
          <div key={index}>
            <ul>
              <li>Trainer: <b>{ele}</b></li>
            </ul>
          </div>
        )
      })} */}
      
      <h1>Name of the Trainer: <b>{trainerName}</b></h1>
      <p>Rating for the trainer: <b>{rating} ⭐</b></p>
      <hr />
    </div>
    
  )
}

export default Child
