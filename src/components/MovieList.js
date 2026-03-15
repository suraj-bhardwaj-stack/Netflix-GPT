import MovieCard from "./MovieCard";

const MovieList = ({title , movies}) => {
    return(
        <div className="movielist-wrapper">
            <div className="list-row ">
                <div className="list-title">
                    <h2>{title}</h2>
                </div>
                <div className="list-movie flex gap-4 overflow-x-auto overflow-y-hidden w-full">
                    {
                        movies.map(movie =><MovieCard key={movie.id} posterUrl={movie.backdrop_path}/>)

                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;