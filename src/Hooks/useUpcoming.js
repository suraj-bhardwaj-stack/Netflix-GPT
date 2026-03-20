import { useDispatch } from "react-redux"
import { API_OPTIONS  } from "../utils/constant";
import { callNowUpcomingMovie } from "../utils/MovieSlice";
import { useEffect } from "react";
const useUpcomingMovies = ()=>{
    const dispatch = useDispatch()

    const fetchMovieNow = async ()=>{
        const data =  await fetch(`https://api.themoviedb.org/3/movie/upcoming`, API_OPTIONS)
        const json = await data.json()
        dispatch(callNowUpcomingMovie(json.results))
    }

    useEffect(()=>{
        fetchMovieNow()
    }, [])
}



export default useUpcomingMovies;