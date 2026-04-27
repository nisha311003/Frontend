import React, { useState } from 'react'

const CategoryFetch = () => {
    let [name, setName] = useState("")
    let [image, setImage] = useState("")

    function handleName(e){
        setName(e.target.value)
    }
    function handleImage(e){
        setImage(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        // fetch("https://api.escuelajs.co/api/v1/categories/",{
        //     method:"POST",
        //     headers: {"Content-Type":"application/json"},
        //     body: JSON.stringify({
        //         name:name,
        //         image:image
        //     })
        // })
        // fetch("https://api.escuelajs.co/api/v1/categories/26",{
        //     method:"PUT",
        //     headers: {"Content-Type":"application/json"},
        //     body: JSON.stringify({
        //         name:name,
        //         image:image
        //     })
        // })
        fetch("https://api.escuelajs.co/api/v1/categories/26",{
            method:"DELETE",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                name:name,
                image:image
            })
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter name' value={name} onChange={handleName}/><br /><br />
        <input type="text" placeholder='Enter image path' value={image} onChange={handleImage}/><br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CategoryFetch
