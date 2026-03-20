import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstent"
import { useRef } from "react"
import openai from "../utils/openAi"
import { showSearchResult } from "../utils/GptSlice"
import { API_OPTIONS } from "../utils/constant"


const GptSearchBar = () =>{
    const dispatch = useDispatch()
    const useLang = useSelector(store => store.language.lang)
    const gptSearchInput = useRef(null)

    
    const gptSearchResult = async () =>{
        const query = gptSearchInput.current?.value;
        if(!query) return null

        const prompt = `You are a movie recommendation assistant. Based on the user's search query, suggest exactly 5 relevant movies.
        Rules:
        - Only return movie names
        - No explanation
        - Comma-separated format
        User query: "${query}`

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'user', content: prompt },
            ],
            });

        const searchResult= completion.choices[0].message.content.split(",");
        
        
        const gptPromise = searchResult.map(list => findSearchMovie(list))
        
        const getAllMovie = await Promise.all(gptPromise)
        dispatch(showSearchResult({movieName :searchResult , movieResult : getAllMovie}))
        
        console.log(getAllMovie);
        

        
        
        
        
    }

    const findSearchMovie = async (name)=>{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1` , API_OPTIONS);
        const json = await data.json();
        return json.results;
        
    }





    const handleGptSearch = (e)=>{
          
        e.preventDefault()
        gptSearchResult()

        console.log(gptSearchResult());
        
    }
    return(
        <div className="gptBar-wrapper w-[40%]   my-0 mx-auto">
             
            <form className="w-full" onSubmit={handleGptSearch}>
                <input className="w-[70%] px-4 py-4 rounded" placeholder={lang[useLang].GptInputPlaceholder} ref={gptSearchInput} />
                <button className="bg-red-600 text-white ml-3 py-3 px-8 rounded font-bold w-[120px]">{lang[useLang].searchBtn}</button>
            </form>
        </div>
    )
}

export default GptSearchBar