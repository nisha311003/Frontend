import React, {useState} from 'react'

const Radio = () => {
  let [gender, setGender] = useState("")
  function handleRadio(e){
    console.log(e.target.value)
    setGender(e.target.value)
  }
  return (
    <div>
      <input type='radio' value="male" checked={gender==="male"} onChange={handleRadio}/>male
      <input type='radio' value="female" checked={gender==="female"} onChange={handleRadio}/> female
      
    </div>
  )
}

export default Radio


