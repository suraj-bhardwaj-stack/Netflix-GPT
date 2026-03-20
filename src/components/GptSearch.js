import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"
import theBg from '../assets/Netflix-bg.jpg'

const GptSearch = () =>{
    return(
        <div className="GptSearch-wrapper bg-black pt-[150px] h-[100dvh]">
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
}

export default GptSearch

