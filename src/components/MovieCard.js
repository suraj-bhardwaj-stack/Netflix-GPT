import { POSTER_URL } from "../utils/constant";
const MovieCard = ({posterUrl}) =>{
    return(
        <div className="moviecard-wrapper  min-w-[200px] flex-shrink-0">
            <img className="w-[200px]" src={POSTER_URL + posterUrl}  alt="movies card"/>
        </div>
    )
}

export default MovieCard;