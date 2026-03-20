import { createSlice } from "@reduxjs/toolkit";

const movieSlice =  createSlice({
    name : 'Movie',
    initialState : {
        nowPlayingMovie : null,
        movieTrailer : null,
        nowPopularMovie :null,
        nowUpcomingMovie : null
        
    },
    reducers :{
        callNowPlayingMovie : (state , action)=>{
            state.nowPlayingMovie = action.payload
        },
        nowPlayingMovieTrailer : (state , action) =>{
            state.movieTrailer = action.payload
        },
        callNowPopularMovie : (state , action) =>{
            state.nowPopularMovie = action.payload
        },
         callNowUpcomingMovie : (state , action) =>{
            state.nowUpcomingMovie = action.payload
        }
    }
})

export const  {callNowPlayingMovie ,nowPlayingMovieTrailer , callNowPopularMovie , callNowUpcomingMovie } = movieSlice.actions
export default movieSlice.reducer