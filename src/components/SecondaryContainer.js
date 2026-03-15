import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () =>{
    const movies = useSelector(store => store.Movie)
    console.log(movies.nowPlayingMovie , "=>");
    
    return(
        <div className="secondary-container">
                <MovieList title="Now Playing" movies={movies.nowPlayingMovie}/>

        </div>
    )
}

export default SecondaryContainer;