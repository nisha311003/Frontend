import React, { useEffect, useState } from 'react'

const Timer = () => {
    let [timer, setTimer] = useState(10)
    useEffect(()=>{
        let id= setInterval(()=>{

            setTimer((prev)=>{
                if(prev <=0){
                    clearInterval(id)
                    return 0;
                }
                return prev-1
            })

        },1000)
    },[])
  return (
    <div style={{textAlign:"center", backgroundColor:"lightskyblue", padding:"10px", width:"70%", margin:"30px auto", borderRadius:"8px",border:"1px solid grey"}}>
      <p style={{color: timer===0? "red":"blue", fontSize:"20px"}}>Timer Expires in <b>{timer}</b> Seconds</p>
    </div>
  )
}

export default Timer
