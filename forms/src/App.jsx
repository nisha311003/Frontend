import React, {useState} from 'react'
import Dropdown from './Dropdown'
import FormTask from './FormTask'
import Radio from './Radio'
import Hobbies from './Hobbies'
import Form from './Form'
import UseRef from './UseRef'
import Datalist from './Datalist'
import UseRefExample from './UseRefExample'

const App = () => {
  let [name, setName] = useState("")
  let [message, setMessage] = useState("")
  let [checked, setChecked] = useState(false)
  function handleChange(e){
    setName(e.target.value)
  }
  function handleText(e){
    setMessage(e.target.value)
  }
  function handleChecked(e){
    console.log(e);
    setChecked(e.target.checked)
    
  }
  return (
    <div>
      {/* <form>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleChange}></input><br /><br /> 
        <textarea value={message} onChange={handleText}></textarea>
        <p>Name: <b>{name}</b></p>
        <p>Message: <b>{message}</b></p>
        <Dropdown/>
      </form> */}
      {/* <FormTask/> */}
      {/* <input type="checkbox"  checked={checked} onChange={handleChecked } />3 years Bond */}
      {/* <Radio/> */}
      {/* <Hobbies/> */}
      {/* <Form/> */}
      {/* <UseRef/> */}
      {/* <Datalist/> */}
      <UseRefExample/>
    </div>
  )
}

export default App
