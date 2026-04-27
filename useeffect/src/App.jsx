import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import ApiCall from './ApiCall'
import ApiIntegration from './ApiIntegration'
import CategoryFetch from './CategoryFetch'

// const App = () => {
//   let [rating, setRating] = useState(0)
//   useEffect(()=>{
//     alert("I will run only once after the component loads")
//   },[])
//   function addClick(){
//     setRating(rating+1)
//   }
//   return (
//     <div>
//       <p>Rating ⭐: <b>{rating}</b></p>
//       <button onClick={addClick}>Add Rating</button>
//     </div>
//   )
// }

// export default App
// const App = () => {
//   let [rating, setRating] = useState(0)
//   useEffect(()=>{
//     console.log("Rating: ", rating);
    
//   },[rating])
//   function addClick(){
//     setRating(rating+1)
//   }
//   return (
//     <div>
//       <p>Rating ⭐: <b>{rating}</b></p>
//       <button onClick={addClick}>Add Rating</button>
//     </div>
//   )
// }

// export default App
const App = () => {
 
  return (
    <div>
      {/* <Timer/> */}
      {/* <ApiCall/> */}
      {/* <ApiIntegration/> */}
      <CategoryFetch/>
    </div>
  )
}

export default App
