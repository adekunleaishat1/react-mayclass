import { createSlice } from "@reduxjs/toolkit";

export const countslice = createSlice({
     name:"count",
     initialState:{
        value:0
     },
     reducers:{
        Increment:(state)=>{
            state.value += 1   
        },
        Decrement:(state)=>{
            state.value -= 1
            if (state.value <= 0) {
                state.value = 0
            }
        }
     }
})

export const {Increment, Decrement} = countslice.actions
export default countslice.reducer