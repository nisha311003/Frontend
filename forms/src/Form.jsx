import React from 'react'
import { useState } from 'react'

const Form = () => {
    let [formData, setFormData] = useState({
        name:"",
        message:"",
        city:"",
        gender:"",
        hobbies:[]
    })
    function handleFormData(e){
        let value = e.target.value;
        let checked = e.target.checked;
        let name = e.target.name;
        let type = e.target.type;

        let updatedData = {...formData}
        if(type==="checkbox"){
            if(checked){
                updatedData.hobbies = formData.hobbies.concat(value)
            }else{
                updatedData.hobbies = formData.hobbies.filter((item)=>{
                    return item !== value
                })
            }
        }else{
            updatedData[name]=value
        }
        setFormData(updatedData)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(formData);
        
    }
  return (
    <div >
      <form onSubmit={handleSubmit} style={{margin:"100px auto",border:"2px solid black", height:"350px", width:"450px", padding:"40px", borderRadius:"10px"}}>
        <label htmlFor="name">Name: </label><br />
        <input id='name' type="text" value={formData.name} name='name' onChange={handleFormData} placeholder='Enter name' style={{width:"100%", borderRadius:"5px", border:"1px solid grey", marginTop:"10px", padding:"5px"}}/>
        <br /><br />
        <label htmlFor="message">Message: </label><br />
        <textarea id='message' name="message" value={formData.message} onChange={handleFormData} placeholder='Write something' style={{width:"100%", borderRadius:"5px", border:"1px solid grey", marginTop:"10px", padding:"5px"}}></textarea>
        <br /><br />
        <label htmlFor="city">City: </label><br />
        <select id='city' name="city" onChange={handleFormData} style={{width:"100%", marginTop:"10px",borderRadius:"5px", border:"1px solid grey", padding:"5px"}}>
            <option value="">Select city</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Banglore">Banglore</option>
        </select>
        <br /><br />
        <label htmlFor="gender">Gender: </label>
        <input id='gender' name='gender' type="radio" value="male" checked={formData.gender==="male"} onChange={handleFormData}/>Male
        <input id='gender' name='gender' type="radio" value="female" checked={formData.gender==="female"} onChange={handleFormData}/>Female
        <br /><br />
        <label htmlFor="hobby">Hobbies: </label>
        <input type="checkbox" value="Travelling" onChange={handleFormData}/>Travelling
        <input type="checkbox" value="Painting" onChange={handleFormData}/>Painting
        <input type="checkbox" value="Singing" onChange={handleFormData}/>Singing
        <br /><br />
        <button style={{color:"white",width:"100%", backgroundColor:"green", padding:"10px", border:"none", borderRadius:"5px"}}>Submit</button>
      </form>
    </div>
  )
}

export default Form
