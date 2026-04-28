import {createSlice} from "@reduxjs/toolkit"

let initialState={
    count:0
}
let counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1
        },
        decrement: (state)=>{
            if(state.count >0) state.count -=1
        },
        reset: (state)=>{
            state.count =0
        }
    }
    
})
export default counterSlice.reducer
export let {increment, decrement, reset} = counterSlice.actions