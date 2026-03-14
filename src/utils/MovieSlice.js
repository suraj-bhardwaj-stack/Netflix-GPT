import { createSlice } from "@reduxjs/toolkit";

const movieSlice =  createSlice({
    name : 'Movie',
    initialState : {
        nowPlayingMovie : null,
        movieTrailer : null
    },
    reducers :{
        callNowPlayingMovie : (state , action)=>{
            state.nowPlayingMovie = action.payload
        },
        nowPlayingMovieTrailer : (state , action) =>{
            state.movieTrailer = action.payload
        }
    }
})

export const  {callNowPlayingMovie ,nowPlayingMovieTrailer} = movieSlice.actions
export default movieSlice.reducer