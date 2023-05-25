import{configureStore}from "@reduxjs/toolkit"
import personReducer from"./slices/personSlice"
export default configureStore({reducer:{person:personReducer}})
