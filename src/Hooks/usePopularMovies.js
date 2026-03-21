import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS  } from "../utils/constant";
import { callNowPopularMovie } from "../utils/MovieSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const popularMovies = useSelector(store => store.Movie.nowPopularMovie)
    const dispatch = useDispatch()

    const fetchMovieNow = async ()=>{
        const data =  await fetch(`https://api.themoviedb.org/3/movie/top_rated`, API_OPTIONS)
        const json = await data.json()
        dispatch(callNowPopularMovie(json.results))
    }

    useEffect(()=>{
        !popularMovies && fetchMovieNow()
    }, [])
}



export default usePopularMovies;