import React from 'react'
import { useState } from 'react'

const FormTask = () => {
   let [name, setName] = useState("")
   let [email, setEmail] = useState("")
   let [password, setPassword] = useState("")
   let [address, setAddress] = useState("")
   let [city, setCity] = useState("")

   function handleName(e){
    
    setName(e.target.value)
   }
   function handleEmail(e){
   
    setEmail(e.target.value)
   }

   function handlePassword(e){
   
    setPassword(e.target.value)
    
   }
   function handleAddress(e){
    
    setAddress(e.target.value)
    
   }
   function handleCity(e){
  
    setCity(e.target.value)
    
   }
   function handleSubmit(e){
    e.preventDefault() 
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(address);
    console.log(city);
    setName("");
    setEmail("")
    setPassword("")
    setAddress("")
    setCity("")
    
   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input  id="name" type="text" placeholder="Enter your name" value={name} onChange={handleName}/>
        <br /><br />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" placeholder='Enter your email' value={email} onChange={handleEmail}/>
        <br /><br />
        <label htmlFor="pass">Password: </label>
        <input type="password" placeholder='Enter your password' id='pass' value={password} onChange={handlePassword}/>
        <br /><br />
        <label htmlFor="address">Address: </label>
        <textarea value={address} onChange={handleAddress}></textarea>
        <br /><br />
        <label htmlFor="city">Select City: </label> 
        <select value={city} onChange={handleCity}>
            <option value="">Select City</option>
            <option value="Patna">Patna</option>
            <option value="Rajgir">Rajgir</option>
            <option value="Phagwara">Phagwara</option>
        </select>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormTask
