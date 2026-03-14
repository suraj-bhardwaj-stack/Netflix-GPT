import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingMovieTrailer } from "../utils/MovieSlice";
const VideoContainer = ({id}) =>{
    const dispatch = useDispatch()
    const movieApi = useSelector(store => store.Movie.movieTrailer)
    const NowPlayingVidoe = async () =>{
        const videoData = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS)
        const  json = await videoData.json()
        const filterVideo = json.results.filter(video => video.type === "Trailer")
        const trailer = filterVideo.length ? filterVideo[0] : json.results[0]
        dispatch(nowPlayingMovieTrailer(trailer))
    }

    
 

    // console.log(movieApi);
    
    
    

    useEffect(()=>{
        NowPlayingVidoe()
    },[])

    if (!movieApi?.key) return null;

    return(
        <div className="videoContainer-wrapper w-[100%] aspect-[16/7] absolute top-0 ">
            <iframe className="w-[100%] aspect-[16/7] " src={`https://www.youtube.com/embed/${movieApi.key}?autoplay=1&loop=1&playlist=${movieApi.key}&controls=0&modestbranding=1&playsinline=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                ></iframe>
        </div>
    )
}



export default VideoContainer;



 
 
 

      

        
 
 