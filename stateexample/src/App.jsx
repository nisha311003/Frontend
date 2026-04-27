import React, { useState } from 'react'
import Counter from './Counter';

const App = () => {
  let [company, setCompany] = useState("Testyantra");

  let [battery, setBattery] = useState(50)

  let [isSleeping, setIsSpleeping] = useState(false)

  let [cricketers, setCricketers]=useState(["Dhoni", "Hitman","Virat Kohli"])

  let [user, setUser]=useState({name:"Rohit", age:20})

  let [data, setData] = useState(undefined)

  let handleClick =()=>{
    setCompany("Infosys...😉")
  }
  let usePhone =()=>{
    setBattery(battery-10)
  }
  let charging=()=>{
    setBattery(100)
  }

  let toggle=()=>{
    setIsSpleeping(!isSleeping)
  }

  let addCricketers=()=>{
    setCricketers([...cricketers,"Yuvraj Singh"])
  }

  let increaseAge=()=>{
    setUser({...user,name:"Himani",age:user.age+1})
  }
  return (
    <div>
      <p>Comany Name: <b>{company}</b></p>
      <button onClick={handleClick}>Change Company</button>

      <p> 🔋Battery: <b>{battery} %</b></p>
      <button style={{margin:"10px"}} onClick={usePhone}>Use Phone 📱</button>
      <button onClick={charging}>Charge 🔋</button>
      {battery<=20 && <p>Turn on Power Saving mode ⚡</p>}

      <p>{isSleeping? "Sleeping 😴": "Awake 😁"}</p>
      <button onClick={toggle}>Toggle</button>

      {cricketers.map((ele, index)=>{
        return(
          <ul key={index}>
            <li>{ele}</li>
          </ul>
        )
      })}
      <button onClick={addCricketers}>Add Cricketers</button>

      <p>UserName: <b>{user.name}</b></p>
      <p>Age: <b>{user.age}</b></p>
      <button onClick={increaseAge}>Increase Age</button>

      <Counter/>

      <p>{data ? "data is present": "Undefined"}</p>
    </div>
  )
}
 
export default App
