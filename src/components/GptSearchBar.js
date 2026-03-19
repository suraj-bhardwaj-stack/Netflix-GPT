import { useSelector } from "react-redux"
import lang from "../utils/languageConstent"

const GptSearchBar = () =>{
    const useLang = useSelector(store => store.language.lang)
    return(
        <div className="gptBar-wrapper w-[40%] relative top-[30%] my-0 mx-auto">
            <form className="w-full ">
                <input className="w-[70%] px-4 py-4 rounded" placeholder={lang[useLang].GptInputPlaceholder}/>
                <button className="bg-red-600 text-white ml-3 py-3 px-8 rounded font-bold w-[120px]">{lang[useLang].searchBtn}</button>
            </form>
        </div>
    )
}

export default GptSearchBar