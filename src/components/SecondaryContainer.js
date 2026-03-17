import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () =>{
    const movies = useSelector(store => store.Movie)
    if(!movies) return null
    console.log(movies.nowPopularMovie , "=> pop");
    
    return(
        <div className="secondary-container bg-black">
                <div className="inner-movie-list-wrapper relative top-[-114px]">
                    <MovieList title="Now Playing" movies={movies.nowPlayingMovie}/>
                    <MovieList title="Top Rated" movies={movies.nowPopularMovie}/>
                    <MovieList title="Popular" movies={movies.nowUpcomingMovie}/>
                </div>

        </div>
    )
}

export default SecondaryContainer;