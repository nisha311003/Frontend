import React from 'react'
import { useState } from 'react'

const Datalist = () => {
    let [location, setLocation] = useState("")
    let [courses, setCourses] = useState("")

    function handleDatalist(e){
        setLocation(e.target.value)
    }
    function handleOptGroup(e){
        setCourses(e.target.value)
    }
  return (
    <div>
      <label htmlFor="location">Location: </label>
      <input list='locations' name='locations' value={location} onChange={handleDatalist}/>
      <datalist id="locations">
        <option value="Banglore">Banglore</option>
        <option value="Pune">Pune</option>
        <option value="Hyderabad">Hyderabad</option>
      </datalist>
      <p>Location: <b>{location}</b></p>

      <label htmlFor="courses">Courses: </label>
      <select value={courses} onChange={handleOptGroup}>
        <optgroup label='frontend'>
            <option value="HTML">HTML</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
        </optgroup>
        <optgroup label='backend'>
            <option value="Spring">Spring</option>
            <option value="Nodejs">Nodejs</option>
        </optgroup>
      </select>
      <p>Courses: <b>{courses}</b></p>
    </div>
  )
}

export default Datalist
