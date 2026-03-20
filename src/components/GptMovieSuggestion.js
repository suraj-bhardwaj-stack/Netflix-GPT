import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const GptMovieSuggestion = () =>{
    const {gptSearchMovieName , movieResults} = useSelector(store => store.gpt)
    if(!movieResults) return null
    console.log(movieResults);
    
    return(
        <div className="gpt-suggestion-wrapper  bg-black">
            {
                movieResults.map(( list, i) => <MovieList title={gptSearchMovieName[i]} movies={movieResults[i]}/>)
            }
            
        </div>
    )
}

export default GptMovieSuggestion