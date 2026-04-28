import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/Slice.jsx";

export let store = configureStore({
    reducer:{
        myCounter: counterReducer
    }
})