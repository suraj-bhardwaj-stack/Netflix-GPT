import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcoming";
import GptSearch from "./GptSearch";

const Browse = () =>{
     useNowPlayingMovies()
     usePopularMovies()
     useUpcomingMovies()
     const movies = useSelector(store => store.Movie.nowPlayingMovie)
     const showGpt = useSelector(store => store.gpt.showGpt)
     
    if(!movies) return
    
    return(
        <div className="browse-wraper">
            <Header/>
            {
                showGpt ? <GptSearch/> : <MainContainer title={movies}/>
            }
            
            
        </div>
    )
}

export default Browse;