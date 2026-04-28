import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchData } from './DataSlice';
const App = () => {
  const dispatch = useDispatch();  
  const { data, loading } = useSelector((state) => state.myData);  
  useEffect(() => {    
    dispatch(fetchData()); 
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}      
      {data.slice(0,5).map((item) => 
      (        
        <p key={item.id}>
          <b>Title:</b> {item.title}</p>      
      ))}
    </div>
  )
}

export default App
