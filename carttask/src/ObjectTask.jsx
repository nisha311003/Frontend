import React, { useState } from 'react'

const ObjectTask = () => {
    let [object, setObject] = useState({
        name:"Nisha",
        age: 22,
        role: "React Developer",
        location:"Banglore"
    })
    let [newLocation, setNewLocation] = useState("")
    function handleInput(e){
      setNewLocation(e.target.value)
    }
    function handleEdit(e){
        setObject({...object, location: newLocation})
    }
    function handleDelete(){
        let newObj = {...object}
        delete newObj["role"];
        setObject(newObj)
    }
  return (
    <div>
      <p>Name: <b>{object.name}</b></p>
      <p>Age: <b>{object.age}</b></p>
      {object.role ? <p>Role: <b>{object.role}</b></p>: <p></p>}
      <p>Location: <b>{object.location}</b></p>
      <input type="text" placeholder='Enter location' onChange={handleInput}/>
      <button onClick={handleEdit} style={{marginRight:"10px "}}>Edit Location</button>
      <button onClick={handleDelete}>Delete Role</button>
    </div>
  )
}

export default ObjectTask
