import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () =>{
    return(
        <div className="GptSearch-wrapper bg-black h-[100dvh]">
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
}

export default GptSearch

