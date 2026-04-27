import React, { useEffect, useState } from 'react'

const ApiCall = () => {
    let [data, setData] = useState([])
    useEffect(()=>{
        async function handleData(){
            try {
                let res= await fetch("https://fakestoreapi.com/users")
                let actual = await res.json();
                console.log(actual);
                setData(actual)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        handleData()
    }, [])
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"center", margin:"50px auto"}}>
      {data.map((ele, index)=>{
        return (
        <div key={index} style={{border:"1px solid black",textAlign:"center", padding:"30px 30px", width:"200px", backgroundColor:"#eee",borderRadius:"8px"}}>
            <p>UserName: <b>{ele.name.firstname} {ele.name.lastname}</b></p>
            <p>City: <b>{ele.address.city}</b></p>
            <p>Zipcode: <b>{ele.address.zipcode}</b></p>
        </div>
        )
      })}
    </div>
  )
}

export default ApiCall
