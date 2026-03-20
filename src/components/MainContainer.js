
import MovieList from "./MovieList";
import SecondaryContainer from "./SecondaryContainer";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle"

const MainContainer = (props) =>{
    const {id , original_title , overview } = props.title[0]
    
    return(
        <div className="mainContainer-wrapper">
            <VideoTitle id={id}  overview={overview } title={original_title}/>
            <VideoContainer id={id}/>
            <SecondaryContainer/>
        </div>
    )
}


export default MainContainer