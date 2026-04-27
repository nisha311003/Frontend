import React, {useState} from 'react'

const Hobbies = () => {
  let [hobbies, setHobbies] = useState([])
  function handleCheck(e){
    let value = e.target.value;
    let checked = e.target.checked
    if(checked){
        setHobbies([...hobbies, value])
    }
    else{
        setHobbies(hobbies.filter((ele, index)=>{
            return ele !== value
        }))
    }
  }
  return (
    <div>
      <input type="checkbox"  value="Football" onChange={handleCheck}/> Football
      <input type="checkbox" value="Cricket" onChange={handleCheck} /> Cricket
      <input type="checkbox" value="Baseball" onChange={handleCheck}/> Baseball
      <p>Hobbies: {hobbies}</p>
    </div>
  )
}

export default Hobbies
