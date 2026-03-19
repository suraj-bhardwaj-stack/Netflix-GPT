import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGpt : false,
    },
    reducers :{
        callGptToggle : (state)=> {
            state.showGpt = !state.showGpt
        }
    }
})


export const {callGptToggle} = GptSlice.actions

export default GptSlice.reducer

