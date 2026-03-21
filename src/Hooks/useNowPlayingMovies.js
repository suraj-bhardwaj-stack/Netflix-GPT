import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS , THE_MOVIE_API } from "../utils/constant";
import { callNowPlayingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";




const useNowPlayingMovies = ()=>{
    const nowPlayingMovie = useSelector(store => store.Movie.nowPlayingMovie);
    const dispatch = useDispatch()

    const fetchMovieNow = async ()=>{
        const data =  await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${THE_MOVIE_API}`, API_OPTIONS)
        const json = await data.json()
        dispatch(callNowPlayingMovie(json.results))
    }

    useEffect(()=>{
        !nowPlayingMovie && fetchMovieNow()
    }, [])
}



export default useNowPlayingMovies