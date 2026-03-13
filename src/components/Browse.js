import Header from "./Header";
import theBg from '../assets/Netflix-bg.jpg'
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

const Browse = () =>{
     useNowPlayingMovies()
    return(
        <div className="browse-wraper">
            <Header/>
            <img className='absolute top-0 h-dvh w-dvw object-cover' src={theBg} alt="the-bg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
        </div>
    )
}

export default Browse;