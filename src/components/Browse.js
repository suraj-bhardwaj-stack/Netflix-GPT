import Header from "./Header";
import theBg from '../assets/Netflix-bg.jpg'
import { useEffect } from "react";
import { API_OPTIONS , THE_MOVIE_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { callNowPlayingMovie } from "../utils/MovieSlice";

const Browse = () =>{

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

    return(
        <div className="browse-wraper">
            <Header/>
            <img className='absolute top-0 h-dvh w-dvw object-cover' src={theBg} alt="the-bg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
        </div>
    )
}

export default Browse;