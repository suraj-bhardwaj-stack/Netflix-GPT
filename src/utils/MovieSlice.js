import { createSlice } from "@reduxjs/toolkit";

const movieSlice =  createSlice({
    name : 'Movie',
    initialState : {
        nowPlayingMovie : null,
    },
    reducers :{
        callNowPlayingMovie : (state , action)=>{
            state.nowPlayingMovie = action.payload
        }
    }
})

export const  {callNowPlayingMovie} = movieSlice.actions
export default movieSlice.reducer