import React, { useState } from 'react'

const ApiIntegration = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [avatar, setAvatar] = useState("")
    function handleName(e){
        setName(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handleAvatar(e){
        setAvatar(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        //Send the data
        // fetch("https://api.escuelajs.co/api/v1/users/",{
        //     method:"POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         name:name,
        //         email:email,
        //         password:password,
        //         avatar:avatar
        //     })
        // })

        //Update the data
        // fetch("https://api.escuelajs.co/api/v1/users/19",{
        //     method:"PUT",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({
        //         name:name,
        //         email:email,
        //         password:password,
        //         avatar:avatar
        //     })
        // })

        //Delete the data
        fetch("https://api.escuelajs.co/api/v1/users/19",{
            method:"DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name:name,
                email:email,
                password:password,
                avatar:avatar
            })
        }) 
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter name' value={name} onChange={handleName}/>
        <br /><br />
        <input type="email" placeholder='Enter email' value={email} onChange={handleEmail}/>
        <br /><br />
        <input type="password" placeholder='Enter password' value={password} onChange={handlePassword}/>
        <br /><br />
        <input type="text" placeholder='Enter image path' value={avatar} onChange={handleAvatar}/>
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ApiIntegration
