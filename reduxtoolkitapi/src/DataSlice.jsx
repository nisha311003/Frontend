import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk(
    "data/fetchData",
    async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json()
    }
)
const dataSlice = createSlice({
    name:"data",
    initialState: {
        data:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending, (state)=>{
            state.loading=true
        })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchData.rejected, (state)=>{
            state.loading = false;
            state.error = "Error fetching data"
        })
    }
})
export default dataSlice.reducer