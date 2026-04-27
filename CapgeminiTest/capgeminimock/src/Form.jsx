import React, { useState } from 'react'

const Form = () => {
   let [formData, setFormData]= useState({
    name:"",
    email:"",
    password:"",
    address:"",
    city:"",
    gender:"",
    hobbies:[]
   })
   function handleChange(e){
        let name = e.target.name
        let type = e.target.type
        let checked = e.target.checked
        let value= e.target.value

        let updatedData = {...formData}

        if(type==="checkbox"){
            if(checked){
                updatedData.hobbies = formData.hobbies.concat(value)
            }
            else{
                updatedData.hobbies = formData.hobbies.filter((val)=>{
                    return val !== value
                })
            }
        }else{
            updatedData[name] = value
        }
        setFormData(updatedData)

   }
   function handleSubmit(e){
    e.preventDefault()
    if(formData.name !=="" && formData.email!=="" && formData.password!=="" && 
        formData.address!=="" && formData.city!=="" && formData.gender!==""){
            alert("Form submitted successfully!!")
            console.log(formData);      
    }
    else{
        alert("Please fill all the fields!!!")
    }
   }
  return (
    <div style={{border:"1px solid grey", width:"300px", padding:"30px 50px",margin:"100px auto", borderRadius:"10px", backgroundColor:"#eee"}}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label><br />
        <input style={{width:"100%", marginTop:"5px", marginBottom:"10px", padding:"5px"}} type="text" placeholder='Enter your name' name='name' value={formData.name} onChange={handleChange}/>
        <br />
        <label htmlFor="email">Email: </label><br />
        <input style={{width:"100%", marginTop:"5px", marginBottom:"10px", padding:"5px"}} type="email" placeholder='Enter your email'name='email' value={formData.email} onChange={handleChange}/>
        <br />
        <label htmlFor="password">Password:</label><br />
        <input style={{width:"100%", marginTop:"5px", marginBottom:"10px", padding:"5px"}} type="password" placeholder='Enter your password' name='password' value={formData.password} onChange={handleChange}/><br />
        <label htmlFor="address">Address: </label><br />
        <textarea style={{width:"100%", marginTop:"5px", marginBottom:"10px", padding:"5px"}} name="address" id="address" value={formData.address} onChange={handleChange} placeholder='Enter your address'></textarea><br />
        <label htmlFor="city">City: </label>
        <select style={{width:"100%", marginTop:"5px", marginBottom:"10px", padding:"5px"}} name="city" id="city" onChange={handleChange}>
            <option value="">select city</option>
            <option value="Patna">Patna</option>
            <option value="Phagwara">Phagwara</option>
            <option value="Rajgir">Rajgir</option>
        </select>
        <br />
        <label htmlFor="gender">Gender: </label>
        <input type="radio" name='gender' value="male" checked={formData.gender==="male"} onChange={handleChange}/>male
        <input type="radio" name="gender" value="female" checked={formData.gender==="female"} onChange={handleChange}/>female
        <br /><br />
        <label  htmlFor="hobbies">Hobbies: </label>
        <input type="checkbox" value="Painting" onChange={handleChange}/>Painting 
        <input type="checkbox" value="Singing" onChange={handleChange}/>Singing
        <input type="checkbox" value="Reading" onChange={handleChange}/>Reading
        <br /><br />
        <button style={{width:"100%", backgroundColor:"green", borderRadius:"8px", border:"none", padding:"8px 16px", color:"white"}}>Submit</button>
      </form>
    </div>
  )
}

export default Form
