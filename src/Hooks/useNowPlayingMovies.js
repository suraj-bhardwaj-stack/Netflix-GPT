import { useDispatch } from "react-redux"
import { API_OPTIONS , THE_MOVIE_API } from "../utils/constant";
import { callNowPlayingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";
const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    const fetchMovieNow = async ()=>{
        const data =  await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${THE_MOVIE_API}`, API_OPTIONS)
        const json = await data.json()
        console.log(json.results)
        dispatch(callNowPlayingMovie(json.results))
    }

    useEffect(()=>{
        fetchMovieNow()
    }, [])
}



export default useNowPlayingMovies