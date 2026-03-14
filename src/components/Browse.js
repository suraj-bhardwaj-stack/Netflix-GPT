import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Browse = () =>{
     useNowPlayingMovies()
     const movies = useSelector(store => store.Movie.nowPlayingMovie)
    if(!movies) return
    
    return(
        <div className="browse-wraper">
            <Header/>
            <MainContainer title={movies}/>
        </div>
    )
}

export default Browse;