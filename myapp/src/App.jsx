import React from 'react'

const App = () => {
    // let name="Nisha"
    // let company="Capgemini"
    // let year=2003
    // let details={
    //     name:"Nisha",
    //     city:"Patna"
    // }
    // let cityName=["Chennai", "Hyderabad","Banglore","Amritsar"]
    // let skills=["Java","Spring", "HTML","JavaScript"]
    // function greeting(){
    //     return "Good morning 😁"
    // }
    let isRaining=true;
    let a=10;
    let b=20;
  return (
    <div>
      {/* <h1>Name: {details.name}</h1>
      <h1>Company: {company}</h1>
      <h1>Current: {2026-year}</h1> */}
      {/* <h1>City: {details.city}</h1> */}

      {/* <h1>City: {cityName[2]}</h1> */}

      {/* {cityName.map((ele,index)=>{
        return (
            <div key={index}>
                <h1>{ele}</h1>
            </div>
        )
      })}
      {skills.map((ele, index)=>{
        return(
            <div key={index}>
                <h1>Skill{index+1}: {ele}</h1>
            </div>
        )
      })} */}
      {/* {greeting()} */}
      {isRaining? <b>Eating tea with pakora ☕</b>: <b>Eating icecream 🍦</b>}
      <h1>The sum of {a} and {b} is: {a+b}</h1>
    </div>
  )
}

export default App
