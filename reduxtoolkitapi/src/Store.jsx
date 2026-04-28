import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../src/DataSlice.jsx'
export const store =configureStore({
    reducer:{
        myData:dataReducer
    }

})