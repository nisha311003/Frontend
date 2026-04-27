import React, {useState} from 'react'

const Dropdown = () => {
    let [item, setItem] = useState("")
    function handleDropDown(e){
        setItem(e.target.value)
    }
  return (
    <div>
      <select value={item} onChange={handleDropDown}>
        <option value="">Select Item</option>
        <option value="Pizza 🍕">Pizza</option>
        <option value="Burger 🍔">Burger</option>
        <option value="Ice cream 🍨">Ice cream</option>
      </select>
      <p>Selected Item: <b>{item}</b> </p>
    </div>
  )
}

export default Dropdown
