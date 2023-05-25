import {createSlice}from "@reduxjs/toolkit"
const personSlice=createSlice({
    name:"person",
    initialState:{
        count:0
    },
    reducers:{
       // incriment:(state)=>{state.count+=1},
       // decriment:(state)=>{state.count-=1}
    }
})
export default  personSlice.reducer
export const {incriment,decriment}=personSlice.actions