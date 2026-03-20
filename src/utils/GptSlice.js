import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGpt : false,
        gptSearchMovieName : null,
        movieResults :null,
    },
    reducers :{
        callGptToggle : (state)=> {
            state.showGpt = !state.showGpt
        },
        showSearchResult : (state , action)=>{
            const {movieName  , movieResult} = action.payload;
            state.gptSearchMovieName = movieName;
            state.movieResults = movieResult;
        }
    }
})


export const {callGptToggle ,showSearchResult} = GptSlice.actions

export default GptSlice.reducer

