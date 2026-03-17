import MovieCard from "./MovieCard";

const MovieList = ({title , movies}) => {
    console.log(title)
    return(
        <div className="movielist-wrapper py-[20px] pl-[8px]">
            <div className="list-row ">
                <div className="list-title">
                    <h2 className="text-white text-xl mb-4 font-bold">{title}</h2>
                </div>
                <div className="list-movie flex gap-4 overflow-x-auto overflow-y-hidden w-full">
                    {
                        movies?.map(movie =><MovieCard key={movie.id} posterUrl={movie?.backdrop_path || movie?.backdrop_path}/>)

                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;